import { Blog } from './blog.js';
import { IdUtil } from "../../utilities/id-util";
import * as database from '../../database';

//list all blogs
export function index(req,res) {
    //return res.status(200).json();
    return res.status(201).json({
        message: "All blogs are going to be listed!"
    });
}

export function indexDb(req,res,next) {
    let blogList = new Array();
    try {
        database.blogentries.list()
            //TODO: read array and create json data
            .then(function (res) {
                //let blog= JSON.stringify(res[0], null, 3);
                for (let index in res){
                    let blog = res[index];
                    blogList.push({
                        "title" : blog.title
                    })
                }

                //TODO: return JSON data - list of blog-entries.
                res.writeHead(200, {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*"
                });
                res.send(JSON.stringify(blogList));
                res.end();
            });

    } catch (ex) {
        console.log(ex);
        next(ex);
    }

}



//not used at the moment
export function show(req,res) {
    return res.json();
}
export function update(req,res) {
    return res.json();
}
export function remove(req,res) {
    return res.json();
}


/**
 * Main function for getting/processing post data
 * @param req
 * @param res
 * @returns {*}
 */
export function create(req,res) {
    //init address
    let new_blogEntry = new Blog(
        IdUtil.generateBlogId(),
        "test-nickname",
        req.body.title.toLowerCase(),
        req.body.content.toLowerCase()
    );

    console.log("log post on the server (see below):");
    console.log(new_blogEntry);
    return res.status(201).json({
        message: "We received your blog-entry (Blog-ID, First/Lastname)",
        id: new_blogEntry.id,
        title: new_blogEntry.title,
        nickname: new_blogEntry.nickname
    });
}

export async function createDb(req,res, next) {
    try {
        let new_blogEntry = new Blog(
            "test-nickname",
            req.body.title.toLowerCase(),
            req.body.content.toLowerCase()
        );

        if (new_blogEntry.nickname) {
            await database.blogentries.create(
                new_blogEntry.nickname,
                new_blogEntry.title,
                new_blogEntry.content
            );
        }
        return res.status(201).json({
            message: `blog inserted with ${new_blogEntry.title}!`
        });
        //res.redirect('/');
    } catch (ex) {
        next(ex);
    }
}

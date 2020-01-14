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

export function indexDb2(req,res,next) {
    try {
        let blogEntries = null;
        database.blogentries.list()
            .then(res => console.log(res))
            .then(res => blogEntries=JSON.stringify(res, null, 2));
        res.send(blogEntries);
    } catch (ex) {
        next(ex);
    }
}

export function indexDb(req,res,next) {
    try {
        let blogEntries = database.blogentries.list();
        console.log(blogEntries);
        res.send(JSON.stringify(blogEntries, null, 2));
    } catch (ex) {
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
            IdUtil.generateBlogId(),
            "test-nickname",
            req.body.title.toLowerCase(),
            req.body.content.toLowerCase()
        );

        if (new_blogEntry.nickname) {
            await database.blogentries.create(
                new_blogEntry.id,
                new_blogEntry.nickname,
                new_blogEntry.title,
                new_blogEntry.content
            );
        }
        //res.redirect('/');
    } catch (ex) {
        next(ex);
    }
}

import { Blog } from './blog.js';
import * as database from '../../database';

//list all blogs
export async function indexDb(req,res,next) {
    var blogList = [];
    const init = {
        'status': 200,
        'statusText': 'SuperSmashingGreat!'
    };
    try {
        await database.blogentries.list()
            //TODO: read array and create json data
            .then(function (res) {
                //let blog= JSON.stringify(res[0], null, 3);
                for (let index in res){
                    let blog = res[index];
                    blogList.push({
                        "nickname": blog.nickname,
                        "title" : blog.title,
                        "content": blog.content
                    })
                }
            });
        return res.status(200).send(JSON.stringify(blogList));
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
    } catch (ex) {
        next(ex);
    }
}

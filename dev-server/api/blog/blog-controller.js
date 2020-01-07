import { Blog } from './blog.js';
import { IdUtil } from "../../utilities/id-util";

export function index(req,res) {
    return res.json();
}
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
    return res.json({
        message: "We received your post (Order-ID, First/Lastname)",
        id: new_blogEntry.id,
        title: new_blogEntry.title,
        nickname: new_blogEntry.nickname,
    });
}

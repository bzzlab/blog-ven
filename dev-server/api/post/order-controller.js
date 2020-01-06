import { Post } from './post.js';
import Address from '../user/address';

/**
 * Main function for getting/processing post data
 * @param req
 * @param res
 * @returns {*}
 */
export function index(req,res) {
    //init address
    let new_address = new Address(
        req.body.firstname.toLowerCase(),
        req.body.lastname.toLowerCase(),
        req.body.street.toLowerCase(),
        req.body.zip.toLowerCase(),
        req.body.city.toLowerCase()
    );

    let new_order = new Post(
        generateOrderId(), new_address
    );
    console.log("log post on the server (see below):");
    console.log(new_order);
    return res.json({
        message: "We received your post (Order-ID, First/Lastname)",
        id: new_order.orderid,
        firstname: new_address.firstname,
        lastname: new_address.lastname,
    });
}

function generateOrderId() {
    return Math.floor(Math.random()*100).toString()+'-'
        +Math.floor(Math.random()*100).toString();
}

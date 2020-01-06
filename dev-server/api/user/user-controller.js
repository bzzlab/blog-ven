// export function index(req, res) {
//     return res.json({message: "Hello World"});
// }
import Account from './account';

/**
 * Main function for getting/processing user data
 * @param req
 * @param res
 * @returns {*}
 */
export function index(req,res) {
    //init account
    let new_account = new Account(
        generateUserId(),
        req.body.email.toLowerCase(),
        req.body.password.toLowerCase()
    );

    console.log(new_account);
    return res.json({message: "User"+new_account.email+"registred!", id: new_account.id});
}

function generateUserId() {
    return Math.floor(Math.random()*100).toString()+'-'
        +Math.floor(Math.random()*100).toString();
}

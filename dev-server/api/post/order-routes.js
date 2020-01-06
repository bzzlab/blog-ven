import express from 'express';
const router  = express.Router();
import * as controller from './order-controller';

//create new post
/*router.post('/post', (req,res)=>{
    res.send('post.post - create an post');
});*/

router.post('/post', controller.index);

//get orders
router.get('/post', (req,res)=>{
    res.send('get.post - get all orders');
});
//get a specific post from a bunch of orders by id
router.get('/post/:id', (req,res)=>{
    res.send('get.post - get an post by id');
});
//update
router.put('/post', (req,res)=>{
    res.send('put.post - update an post');
});
//delete
router.delete('/post', (req,res)=>{
    res.send('delete.post - delete an post');
});

export default router;

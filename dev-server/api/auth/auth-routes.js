import express from 'express';
const router  = express.Router();

//create new post
router.post('/auth', (req,res)=>{
    res.send('post.auth - login');
});

export default router;

import express from 'express';
const router  = express.Router();

//create new post
router.get('/user', (req,res)=>{
    res.send('get.user - get all users');
});

export default router;

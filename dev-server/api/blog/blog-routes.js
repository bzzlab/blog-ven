import express from 'express';
const router  = express.Router();
import * as controller from './blog-controller';

router.post('/blog', controller.create);

//get orders
router.get('/blog', controller.index);

//For implementation in future
//get a specific blog from a bunch of orders by id
router.get('/blog/:id', controller.show);
//update
router.put('/blog', controller.update);
//delete
router.delete('/blog', controller.remove);
export default router;

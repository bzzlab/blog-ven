import express from 'express';
const router  = express.Router();
import * as controller from './blog-controller';

//create a blog entry
router.post('/blog', controller.createDb);

//get all blog entries
router.get('/blog', controller.indexDb);

/* For implementation in future
//get a specific blog from a bunch of orders by id
router.get('/blog/:id', controller.show);
//update
router.put('/blog', controller.update);
//delete
router.delete('/blog', controller.remove);
*/
export default router;

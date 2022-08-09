import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

// router.get('/', (req,res) => {
    
//     //http://localhost:5000/posts tested using this
//     // always make sure the IP address is upto date on MongoDB cluster
//     // you can check it from https://cloud.mongodb.com/

//     res.send('This work!');
// });


export default router; 
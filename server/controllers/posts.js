// this will take care of the routing handling logics
// in other words getters and setters

import PostMessage from "../moodels/postMessage.js";

// This is a async method as the find method takes time and won't slow down other process.
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  }
  catch (error) {
    res.status(404).json({ message:error.message });
  }
};

// Will be implementing the logic of adding posts
export const createPost = async (req, res) => {
   const post = req.body;

   const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
   } 
   catch (error) {
    res.status(409).json({ message: error.message });
   }
};

//Testing git
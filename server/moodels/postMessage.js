// Purpose: This will help us to utilize the purpose of mongoose.

import mongoose from "mongoose";

// This function will have mongoose.Schema that will objects stored in it.
const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tag: [String],
    selectFile: String,
    likedCount: {
        type: Number,
        default: 0
    }, 
    createAt: {
        type: Date,
        default: new Date()
    },
});

// This will create a model
const PostMessage = mongoose.model('PostMessage', postSchema)
export default PostMessage;
import mongoose from 'mongoose';

//Create mongoose schema for all posts.

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0 
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//Create mongoose model from post schema
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

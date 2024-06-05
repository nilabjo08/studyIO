import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({

    title: {
        type: String,
    },

    content: {
        type: String,
    },

    likes: { 
        type: Number, 
        default: 0 
    },

    comments: [{ text: String }],
});
 

export const Post = mongoose.model('Post', postSchema);
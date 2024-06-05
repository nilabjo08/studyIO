import {Router} from "express";
import { Post } from "../models/postModel.js";

const router = Router()

router.get('/posts', async (req, res) => {

    try {

        const posts = await Post.find();

        res.json(posts);

    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });

    }
});

router.post('/posts', async (req, res) => {

    try {

        const { title, content } = req.body;
 

        if (!title || !content) {

            return res.status(400).json({ error: 'Title and content are required fields' });

        }
 

        const post = new Post({ title, content});
        

        await post.save();
        console.log(post);
        res.status(201).json(post);

    } catch (error) {

        console.error('Error creating post:', error);

        res.status(500).json({ error: 'Internal Server Error' });

    }
});

router.post('/posts/like/:postId', async (req, res) => {

    try {

        const postId = req.params.postId;

        const post = await Post.findById(postId);
 

        if (!post) {

            return res.status(404).json({ error: 'Post not found' });

        }
 

        post.likes += 1;

        await post.save();
        console.log("Post is liked");
 

        res.json(post);

    } catch (error) {

        console.error('Error liking post:', error);

        res.status(500).json({ error: 'Internal Server Error' });

    }
});

router.post('/posts/comment/:postId', async (req, res) => {

    try {

        const postId = req.params.postId;

        const { text } = req.body;

        const post = await Post.findById(postId);
 

        if (!post) {

            return res.status(404).json({ error: 'Post not found' });

        }
 

        post.comments.push({ text });

        await post.save();
        console.log("Comment added successfully");
 

        res.json(post);

    } catch (error) {

        console.error('Error adding comment:', error);

        res.status(500).json({ error: 'Internal Server Error' });

    }
});

export default router
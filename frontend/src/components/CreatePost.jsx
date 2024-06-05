import React, { useState } from "react";

import axios from "axios";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [newPost, setNewPost] = useState("");

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post("http://localhost:4000/api/v1/blog/posts", {title, content});
        console.log(response);
        setNewPost(response.data);
    } 
    catch (error) {
        console.log("Post not created",error);
        
    }
  };

  return (
    <>
      <div className="create-post">
        <h2>Create Post</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
        type="text"
          name="content"
          placeholder="Content"
          onChange={(event) => setContent(event.target.value)}
        ></textarea>

        <button onClick={handlePostSubmit}>Post</button>
    </div>
    <div className="display-recent-post">
        <h2>Created Post</h2>
        <div className="line"></div>
        <h4>{newPost.title}</h4>
        <p>{newPost.content}</p>
    </div>
    </>
  );
};

export default CreatePost;

import React, { useState, useEffect } from "react";
import { SlLike } from "react-icons/sl";

import axios from "axios";
import CreatePost from "../components/CreatePost";

const Blog = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios

      .get("http://localhost:4000/api/v1/blog/posts")

      .then((response) => setPosts(response.data))

      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  console.log(posts);
  const handleLike = (postId) => {
    axios

      .post(`http://localhost:4000/api/v1/blog/posts/like/${postId}`)

      .then((response) => {
        const updatedPosts = posts.map((post) =>
          post._id === postId ? response.data : post
        );

        setPosts(updatedPosts);
      })

      .catch((error) => console.error("Error liking post:", error));
  };

  return (
    <>
      <div className="blog-container">
      <CreatePost />
      <div className="blog">
        <h2>Recent Posts</h2>
        <div className="post">
          {posts.map((value) => (
            <div key={value._id} className="recent-post">
              <h3>{value.title}</h3><br></br>
              <p>{value.content}</p><br></br>
              <p>Likes: {value.likes}</p>

              <button onClick={() => handleLike(value._id)}><SlLike /></button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Blog;

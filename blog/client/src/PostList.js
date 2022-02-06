import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  // pull the posts that are in objects
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  // useEffect used to run code at specific times of life cycle of component
  // this will run only when component is first displayed
  useEffect(() => {
    fetchPosts();
  }, []); // empty array tells react to only run once

  console.log(posts);

  return <div></div>;
};

export default PostList;

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

  //   console.log(posts);

  // will give us Arry of the values
  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        className='card'
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className='card-body'>
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>
  );
};

export default PostList;

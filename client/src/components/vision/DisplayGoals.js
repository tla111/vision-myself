import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import './posts.css';

const DisplayGoals = () => {
  const posts = useSelector((state) => state.postsReducer);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div>
      {posts.map((post) => (
        <div key={post._id} className='post_container'>
          <h1>{post.author}</h1>
          <h1>{post.title}</h1>
          <h1>{post.message}</h1>
          <h1>{moment(post.createdAt).fromNow()}</h1>
          <h1>{post.tags.map((tag) => `#${tag} `)}</h1>
          <img
            src={post.selectedFile}
            alt='posted_goals'
            className='post_image'
          ></img>
        </div>
      ))}
    </div>
  );
};

export default DisplayGoals;

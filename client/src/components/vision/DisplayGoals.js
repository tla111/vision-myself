import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';
import './posts.css';

const DisplayGoals = () => {
  const posts = useSelector((state) => state.postsReducer);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div className='posts_container'>
      {posts.map((post) => (
        <div key={post._id}>
          <div className='card'>
            <img src={post.selectedFile} alt='image_goal' />
            <div className='card_body'>
              <h2>{post.title}</h2>
              <p>{post.message}</p>
              <h5>Posted By: {post.author}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayGoals;

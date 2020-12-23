import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import './posts.css';

const DisplayGoals = () => {
  const posts = useSelector((state) => state.postsReducer);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div className='posts_container'>
      <Carousel breakPoints={breakPoints}>
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
      </Carousel>
    </div>
  );
};

export default DisplayGoals;

import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import './form.css';

const Form = () => {
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    author: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));

    clear();
  };

  const clear = () => {
    setPostData({
      author: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <>
      <form className='form_container' onSubmit={handleSubmit}>
        <h3>Create a Vision</h3>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            aria-describedby='emailHelp'
            placeholder='Your Name'
            value={postData.author}
            onChange={(e) => {
              setPostData({ ...postData, author: e.target.value });
            }}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Title'
            value={postData.title}
            onChange={(e) => {
              setPostData({ ...postData, title: e.target.value });
            }}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Message'
            value={postData.message}
            onChange={(e) => {
              setPostData({ ...postData, message: e.target.value });
            }}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Hashtags'
            value={postData.tags}
            onChange={(e) => {
              setPostData({ ...postData, tags: e.target.value.split(',') });
            }}
          />
        </div>
        <FileBase
          type='file'
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
        <button type='submit' className='btn btn-primary btn-lg'>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

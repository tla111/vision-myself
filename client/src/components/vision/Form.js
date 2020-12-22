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
      selectedFile: '',
    });
  };

  return (
    <>
      <form className='form_container' onSubmit={handleSubmit}>
        <h4>Add a Goal to Your Vision Board</h4>
        <div className='form-group'>
          <input
            type='text'
            className='form-control input_text'
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
            className='form-control input_text2'
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
            className='form-control input_text3'
            placeholder='Message'
            value={postData.message}
            onChange={(e) => {
              setPostData({ ...postData, message: e.target.value });
            }}
          />
        </div>
        <div className='form_container_bottom'>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
            className='image_uploader'
          />
        </div>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

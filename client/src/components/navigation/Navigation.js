import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navigation = () => {
  return (
    <div>
      <button className='btn btn-lg link_buttons'>
        <Link to='/statistics'>Statistics</Link>
      </button>
      <button className='btn btn-lg link_buttons'>
        <Link to='/goals'>Goals</Link>
      </button>
    </div>
  );
};

export default Navigation;

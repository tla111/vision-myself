import React from 'react';
import { Link } from 'react-router-dom';
import './nav_goals.css';

const NavigationGoals = () => {
  return (
    <div className='nav_container'>
      <button className='btn link_buttons'>
        <Link to='/'>Homepage</Link>
      </button>
      <button className='btn link_buttons'>
        <Link to='/statistics'>Statistics</Link>
      </button>
    </div>
  );
};

export default NavigationGoals;

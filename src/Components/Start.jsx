import React from 'react';
import './start.css';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="start">
        <nav className='nav'>
            <Link to="/"><span  className='spans'>Home</span></Link>
            <Link to="/game"><span className='spans'>Start_Game</span></Link>
        </nav>
    </div>
   
  );
};

export default Start;

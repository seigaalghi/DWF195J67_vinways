import React from 'react';
import { Link } from 'react-router-dom';
import kasetlittle from '../img/kasetlittle.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='nav-icon'>
          <span>C</span> <img src={kasetlittle} /> <span className='color-primary'>Ways</span>{' '}
        </Link>
        <div className='nav-user'>
          <img src='https://pbs.twimg.com/profile_images/1323299257621700608/9ffagMgF_400x400.jpg' className='user' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

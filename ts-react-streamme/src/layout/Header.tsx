import React from 'react';
import { Link } from 'react-router-dom'

import Auth from '../components/Auth'

const Header = () => {
  return (
    <div className='ui pointing menu'>
      <Link to="/" className="header item">
        StreamMe
      </Link>

      <div className="right menu">
        <Link to='/' className='item'>
          <i className="home icon"></i>
        </Link>

        <a className='item'>
          <Auth />
        </a>
      </div>
    </div>
  );
};

export default Header;

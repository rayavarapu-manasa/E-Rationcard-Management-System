import React from 'react';
import './Mainpage.css';
import { Link } from 'react-router-dom';

function Mainpage() {
  return (
    <div className='navbar'>
      <nav>
        <ul className='left'>
          <li>E-Ration Card Management System</li>
        </ul>
        <ul className='right'>
          <li><Link to="/adminlogin">Admin Login</Link></li>
          <li><Link to="/shopkeeperlogin">ShopKeeper Login</Link></li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Mainpage;

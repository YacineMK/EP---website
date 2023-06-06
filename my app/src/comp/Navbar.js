import React, { useState } from 'react';
import './Style.css';
import user from '../Imges/utilisateur.png';
import noti from '../Imges/notification.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isopen, setisopen] = useState(false);

  const toggleNav = () => {
    setisopen(!isopen);
  };

  return (
    <nav>
      <h2 className='logo'>Smart Tech</h2>
      <button className='menu' onClick={toggleNav}>
        {isopen ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`partG ${isopen ? 'open' : ''}`}>
        <li className='links'>Home</li>
        <li className='links'>Content</li>
        <li className='links'>Scan</li>
        <li className='links'>About US</li>
      </ul>
      <div className='kio'>
        <div><img className='im' src={user} alt="User" /></div>
        <div><img className='im' src={noti} alt="Notification" /></div>
      </div>
    </nav>

  );
}

export default Navbar;

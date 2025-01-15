import React from 'react';
import Logo from '../../assets/images/logo.png';
import Profile_logo from '../../assets/images/user.png';
import Wishlist_Logo from '../../assets/images/love.png';
import Bag_Logo from '../../assets/images/bag.png';
import SearchBar from './search/search';
import './nav.css';

function Nav() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          {/* Logo */}
          <li className="logo">
            <img src={Logo} alt="logo" />
          </li>

          {/* Menu Items */}
          <li className="menu-item">MEN</li>
          <li className="menu-item">WOMEN</li>
          <li className="menu-item">KIDS</li>
          <li className="menu-item">HOME & LIVING</li>
          <li className="menu-item">BEAUTY</li>
          <li className="menu-item studio">
            STUDIO <span className="new-badge">NEW</span>
          </li>

          {/* Search Bar */}
          <li className="search-bar">
            <SearchBar />
          </li>

          {/* User Options */}
          <li className="user-options">
            <div className="option">
              <img src={Profile_logo} alt="Profile" />
              <span>Profile</span>
            </div>
          </li>
          <li className="user-options wish">
            <div className="option">
              <img src={Wishlist_Logo} alt="Wishlist" />
              <span>Wishlist</span>
            </div>
          </li>
          <li className="user-options">
            <div className="option">
              <img src={Bag_Logo} alt="Bag" />
              <span>Bag</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;



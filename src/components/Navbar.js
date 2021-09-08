import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdSearch } from 'react-icons/md';
import { GoGear } from 'react-icons/go';

const Navbar = () => {
  const title = 'Capstone Project';
  return (
    <nav>
      <NavLink className="back-btn" to="/" exact>
        <MdKeyboardArrowLeft />
      </NavLink>
      {title}
      <div className="nav-btns-container">
        <MdSearch className="search-btn" />
        <GoGear className="configure-btn" />
      </div>
    </nav>
  );
};

export default Navbar;

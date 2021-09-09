import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdKeyboardArrowLeft, MdSearch } from 'react-icons/md';
import { GoGear } from 'react-icons/go';
import { restoreStocks } from '../redux/home/home';

const Navbar = () => {
  const state = useSelector((state) => state.homeReducer.stocks);
  const dispatch = useDispatch();

  const backClick = () => {
    dispatch(restoreStocks(state));
  };

  const title = 'Stock Market WebApp';
  return (
    <nav>
      <NavLink className="back-btn" to="/" onClick={backClick} exact>
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

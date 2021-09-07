import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import detailsStock from '../../redux/slices/detailsSlices';

const Details = () => {
  const state = useSelector((state) => state.homeReducer.details);
  console.log(state);

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(detailsStock(state));
  }, []);

  return (
    <div>
      <NavLink to="/" exact>OBS</NavLink>
    </div>
  );
};

export default Details;

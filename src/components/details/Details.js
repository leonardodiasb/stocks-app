import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Details = () => {
  const state = useSelector((state) => state.detailsReducer.details);

  const detailDisplay = state.map((state) => (
    <p key={state.symbol}>{state.name}</p>
  ));

  return (
    <div>
      <NavLink to="/" exact>OBS</NavLink>
      {detailDisplay}
    </div>
  );
};

export default Details;

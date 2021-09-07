import React from 'react';
import { NavLink } from 'react-router-dom';

const Details = () => {
  const test = 'test';
  return (
    <div>
      <p>{test}</p>
      <NavLink to="/" exact>OBS</NavLink>
    </div>
  );
};

export default Details;

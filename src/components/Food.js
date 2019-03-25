import React from 'react';
import { Route, NavLink } from 'react-router-dom';


const Food = props => {
  return (
    <div className="Food">
      <strong>{props.name} </strong> 
      <h3>{props.breakfast}</h3>
      <p>{props.lunch} </p>
    </div>
  );
};

Food.defaultProps = {
  name: '',
  breakfast: '',
  lunch: ''
};

export default Food;


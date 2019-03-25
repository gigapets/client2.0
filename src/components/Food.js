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


// Add delete & update button here? & (button onClick here? watch walk through video)
/* <div>
<button type="submit">Edit</button>
{/* <button>Delete</button> */
// </div> 

Food.defaultProps = {
  name: '',
  breakfast: '',
  lunch: ''
};

export default Food;


import React from 'react';
// STEP VI import <Link /> and route to Food when name is clicked
// Remember that the Food route is dynamic!!!
import { Link } from 'react-router-dom';

function FoodsList(props) {
  if (props.foods.length === 0) {
    return <h3>Loading foods...</h3>;
  }
  return (
    <div className="foods-list-wrapper">
      {props.foods.map(food => (
        <Link to={`/food-list/${food.id}`} key={food.id}>
          <div className="food-card">
            <img
              className="food-list-id"
              alt={food.name}
            />

            <p>{food.name}</p>
            <p>${food.breakfast}</p>
            <p>${food.lunch}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FoodsList;

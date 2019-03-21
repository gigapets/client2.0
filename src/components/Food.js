import React, { Fragment, useEffect, useState } from 'react';
// import { Route, NavLink } from 'react-router-dom';

const Food = props => {
  const [state, setState] = useState({
    food: null
  });

  useEffect(() => {
    props.foods && props.foods.length > 0
      ? setState({
          food: props.foods.find(food => food.id == props.match.params.id)
        })
      : setState({ food: null });
  }, [props.foods]);

  return (
    <div className="Food">
      {!state.food && (
        <Fragment>
          <h3>Name: {props.name} </h3>
          <strong> Breakfast: {props.breakfast}</strong>
          <p>Lunch: {props.lunch ? props.lunch : 'time for lunch'}</p>
          <button
            onClick={props.setUpdateForm.bind(this, {
              name: props.name,
              lunch: props.lunch,
              breakfast: props.breakfast,
              id: props.id
            })}
          >
            Edit
          </button>
          <button onClick={props.deleteFood.bind(this, props.id)}>
            delete
          </button>
        </Fragment>
      )}

      {state.food && (
        <Fragment>
          <h3>Name: {state.food.name} </h3>
          <strong> Breakfast: {state.food.breakfast}</strong>
          <p>Lunch: {state.food.lunch}</p>
          <button onClick={props.setUpdateForm.bind(this, state.food)}>
            Edit
          </button>
          <button onClick={props.deleteFood.bind(this, state.food.id)}>
            delete
          </button>
        </Fragment>
      )}
    </div>
  );
};

Food.defaultProps = {
  name: '',
  child: '',
  pet: ''
};

export default Food;

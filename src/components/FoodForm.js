// AddForm 
import React, { Component } from 'react';

import axios from "axios";


class FoodForm extends React.Component {
  state = {
    food: 
    this.props.activeFood ||  
    {
              name: '',
              breakfast: '',
              lunch: ''
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.activeFood &&
      prevProps.activeFood !== this.props.activeFood
    ) {
      this.setState({
        food: this.props.activeFood
      });
    }
  }

  //check if its name or username below??
  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
  
    // We have a nested object on state - Here are the steps to update
    // a single property on that nested object

    // Inside setState, we want to update "food" with a new object
    // Spread in the properties from the old "food" object - ...this.state.food
    // update the one field we are trying to update


    this.setState(prevState => ({
        food: {
        ...prevState.food,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.activeFood) {
      this.props.updateFood(this.state.food);
    } else {
      this.props.addFood(this.state.food);
    }
    this.setState({
        food: {
              name: '',
              breakfast: '',
              lunch: ''
      }
    });
  };


  render() {
    return (
      <div className="FoodForm">
              <h2>{`${this.props.activeFood ? 'Update' : 'Add New'} Food`}</h2>
              <form onSubmit={this.handleSubmit}>

          <input
            type="string"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.food.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="breakfast"
            value={this.state.food.breakfast}
            name="breakfast"
          />
          <input
            onChange={this.changeHandler}
            placeholder="lunch"
            value={this.state.food.lunch}
            name="lunch"
          />
          {/* <button type="submit">Add to GigaPets</button> */}

          <button className="md-button form-button">{`${
            this.props.activeFood ? 'Update' : 'Add New'
          } Item`}</button>
        </form>
      </div>
    );
  }
}

export default FoodForm;

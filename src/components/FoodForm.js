import React, { Component } from 'react';

import axios from 'axios';

class FoodForm extends Component {
  state = {
    food: this.props.activeFood || {
      id: Math.random(),
      name: '',
      breakfast: '',
      lunch: ''
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.activeFood !== this.props.activeFood) {
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

    // Inside setState, we want to update "item" with a new object
    // Spread in the properties from the old "item" object - ...this.state.item
    // update the one field we are trying to update

    this.setState(prevState => ({
      food: {
        ...prevState.food,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    if (this.props.activeFood) {
      this.props.updateFood(e, this.state.food);
    } else {
      this.props.addFood(e, this.state.food);
    }
    this.setState({
      food: {
        name: '',
        breakfast: '',
        lunch: ''
      }
    });
  };

  // addFood = (e, food) => {
  //   e.preventDefault();
  //   axios
  //     .post('https://gigapets.herokuapp.com/gigapets', food)
  //     .then(res => {
  //       this.setState({
  //         foods: res.data
  //       });
  //       // HTTP STEP V - Clear data form in ItemForm and route to /item-list
  //       this.props.history.push('/food-list');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // handleInputChange = e => {
  //   this.setState({ food: { [e.target.name]: e.target.value } });
  // };

  render() {
    return (
      <div className="FoodForm">
        <h2>{`${this.props.activeFood ? 'Update' : 'Add New'} Meal`}</h2>
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
            value={this.state.food.lunch || ''}
            name="lunch"
          />
          <button type="submit">Add to GigaPets</button>
        </form>
      </div>
    );
  }
}

export default FoodForm;

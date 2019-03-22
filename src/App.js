import React, { Component } from 'react';

import './App.css';
import FoodForm from './components/FoodForm';
import Foods from './components/Foods'; //Home
import Food from './components/Food';
// import login from './login';
// import FoodsList from "./components/FoodsFood";
// import Home from "./components/Home";
// import "./styles.css";
// import ReactDOM from 'react-dom';

import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFood: null,
      foods: [],
      error: ''
    };
  }
  // add any needed code to ensure that the foods collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Foods.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get('https://gigapets.herokuapp.com/gigapets')
      .then(res => {
        const foods = res.data.map(food =>
          !food.lunch ? { ...food, lunch: 'What did child have for lunch' } : food
        );
        this.setState({ foods });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  addFood = (food) => {
    axios
      .post('https://gigapets.herokuapp.com/gigapets', food)
      .then(res => {
        this.setState({
          foods: [...this.state.foods, res.data]
        });
        // HTTP STEP V - Clear data form in ItemForm and route to /item-list
        this.props.history.push('/food-list');
      })
      .catch(err => {
        console.log(err);
        
      });
  };

  setUpdateForm = food => {
    this.setState({
      activeFood: food
    });
    this.props.history.push('/food-form');
  };

  updateFood = (food) => {
    console.log(food);
    axios
      .put(`https://gigapets.herokuapp.com/gigapets/${food.id}`, food)
      .then(res => {
        this.setState({
          activeFood: null,
          foods: res.data
        });
        this.props.history.push('/food-list');
      })
      .catch(err => {
        const tempFoods = [...this.state.foods];
        const index = tempFoods.findIndex(item => item.id == food.id);
        let tempFood = { ...tempFoods[index] };
        tempFood = food;
        tempFoods[index] = tempFood;
        this.setState({ foods: tempFoods });

        console.log(err);
      });
  };

  deleteFood = id => {
    const tempFoods = [...this.state.foods];
    const foods = tempFoods.filter(food => food.id != id);
    this.setState({ foods });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink to="/food-form">{`${
              this.state.activeFood ? 'Update' : 'Add'
            } Food`}</NavLink>

            <NavLink exact to="/">
              <p>Child's Food List</p>
              </NavLink>

              <NavLink exact to="/login">
              <p>Login</p>
            </NavLink>

              <NavLink exact to="/registration">
              <p>Register</p>
            </NavLink>

          </div>
        </nav>

        {/* <Route exact path="/" component={Foods} /> cHECK LINE 143*/}
        <Route
          exact
          path="/"
          render={props => (
            <Foods
              {...props} // this is the same as below
              //               match={props.match}
              //               history={props.history}
              //               location={props.location}
              foods={this.state.foods}
              setUpdateForm={this.setUpdateForm}
              deleteFood={this.deleteFood}
            />
          )}
        />
        <Route
          path="/food-list/:id"
          render={props => (
            // <Food {...props} foods={this.state.foods} />}
            <Food
              {...props}
              // deleteItem={this.deleteItem}
              foods={this.state.foods}
              setUpdateForm={this.setUpdateForm}
              deleteFood={this.deleteFood}
            />
          )}
        />

        <Route
          path="/food-form"
          render={props => (
            <FoodForm
              {...props}
              activeFood={this.state.activeFood}
              addFood={this.addFood}
              updateFood={this.updateFood}
            />
          )}
        />
  
        <Route
          path="/Login"
          render={props => (
            <Login
              {...props}
              activeFood={this.state.activeFood}
              addFood={this.addFood}
              updateFood={this.updateFood}
            />
          )}
        /> 


            <Route
          path="/registration"
          render={props => (
            <Register
              {...props}
              // activeFood={this.state.activeFood}
              // addFood={this.addFood}
              // updateFood={this.updateFood}
            />
          )}
        />    


      </div>
    );
  }
}

// const AppWithRouter = withRouter(App);

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//   <Router>
//     <AppWithRouter />
//   </Router>,
//   rootElement
// );

export default withRouter(App);

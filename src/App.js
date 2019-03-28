// this original get & post working

import React, { Component } from 'react';

import './App.css';
import FoodForm from './components/FoodForm';
import Foods from './components/Foods'; 
import Food from './components/Food'; 

import Home from './components/Home';
import FoodList from './components/FoodList';

import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from "react-router-dom";

import Login from './Login';
import Register from './Register';

import axios from "axios";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFood: null,
      foods: [],
      error: ""
    };
  }
  
  componentDidMount() {
    console.log('inside Component Did Mount', this.state);
    axios
      .get("https://gigapets.herokuapp.com/gigapets")
      .then(res => {
        console.log(res);
        this.setState({ foods: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }
  

  addFood = (food) => {
    axios
      .post('https://gigapets.herokuapp.com/gigapets/', food)
      .then(res => {
        this.setState({
          foods: res.data
        });
        // HTTP STEP V - Clear data form in FoodForm and route to /food-list
        this.props.history.push('/food-list');
      })
      .catch(err => {
        console.log(err);
      });
  };  


  setUpdateForm = food => {
    this.setState({
      // activeFood: food
      foods: food
    });
    this.props.history.push("/food-form");
  };
  

  updateFood = (food) => {
    axios
      .put(`https://gigapets.herokuapp.com/gigapets/${food.id}`, food)
      .then(res => {
        this.setState({
          foods: [...this.state.foods, res.data]
          // activeFood: null,
          // foods: res.data
        });
        this.props.history.push("/food-list");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFood = (id) => {
    console.log('now in deleteFood in App');
    axios
      .delete(`https://gigapets.herokuapp.com/gigapets/${id}`)
      .then(res => {
        console.log('Data is back, now set state and reroute', res.data);
        this.setState({
          foods: res.data
        });
        this.props.history.push('/food-list');
      })
      .catch(err => {
        console.log(err);
      });
  };


render() {
  return (
    <div className="App">
      <nav>
      <h1 className="store-header">Welcome to GigaPets</h1>
        <div className="nav-links">
        <NavLink to="/food-form">{`${
              this.state.activeFood ? 'Update' : 'Add'
            } Food`}</NavLink>

          <NavLink exact to="/">
            <p>Child's Food List</p>
          </NavLink>

          <NavLink to="/food-list">List</NavLink>
          
          <NavLink exact to="/login">
              <p>Login</p>
            </NavLink>

          <NavLink exact to="/registration">
              <p>Register</p>
          </NavLink>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      

      {/* <Route exact path="/" component={Foods} /> cHECK LINE 143*/}
      {/* <Route
        exact
        path="/food-list"
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
      /> */}

       <Route
          path="/food-list"
          exact
          render={
            props => <FoodList {...props} foods={this.state.foods} />
            // same as
            //   <FoodList
            //     history={props.history}
            //     foods={this.state.foods}
            //     location={props.location}
            //     match={props.match}
            //   />
          }
        />

      <Route
        path="/food-list/:id"
        render={props => (
          <Food
        {...props}
        foods={this.state.foods}
        // deleteFood={this.deleteFood}
        setUpdateForm={this.setUpdateForm}
      />
    )}
      />

      <Route
      path="/food-form/"
      render={props => (
          <FoodForm
              {...props}
              activeFood ={this.state.activeFood}
              addFood={this.addFood}
              updateFood={this.updateFood}
              setUpdateForm={this.setUpdateForm}
              deleteFood={this.deleteFood}
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
     
     {/* /* <Route Add delete, login & registration method here*/} */}
     
     
     
      </div>
    );
  }
}
 

const AppWithRouter = withRouter(App);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
);

export default App;

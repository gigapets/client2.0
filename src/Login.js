import React, { Component } from 'react';
import axios from 'axios';

const initialUser = {
  username: '',
  password: '',
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: '',
    }
  }

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  submitHandler = event => {
     
    // add header for Estavan in the get
    event.preventDefault();
    axios.post(`https://gigapets.herokuapp.com/login`, this.state.user)
      .then(res => {
          console.log(res.data);
        if (res.status === 200 && res.data) {
          localStorage.setItem('jwt', res.data.token)
          this.props.history.push('/')
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        this.setState({
          message: 'Authentication failed',
          user: { ...initialUser }
        })
      })
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.submitHandler}>
          <section>
            <h1>Login Page</h1>
          </section>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.message
          ? (<h4>{this.state.message}</h4>)
          : undefined
        }
      </div>
    )
  }
} 
export default Login;
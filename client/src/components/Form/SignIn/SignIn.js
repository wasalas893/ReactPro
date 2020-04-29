import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from '../form';
import '../form.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      token: '',
    
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
    this.passwordInputChangeHandler = this.passwordInputChangeHandler.bind(this);
  }

  onSubmitHandler() {
    if (!(this.state.email === '' || this.state.password === '')
      && (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
      axios.post('/api/signIn', {
        email: this.state.email,
        password: this.state.password
      }).then(res => {
         this.setState({
           token:res.data.token
         });
         const data={
           token:this.state.token,
           time:new Date().getTime()
         }
         localStorage.setItem('userTokenTime', JSON.stringify(data));
    
      }).catch(err => {
        console.log(err);
      });
    } else {
      alert('Please enter valid details');
    }
  }

  emailInputChangeHandler(event) {
    this.setState({
      email: event.target.value
    });
  }

  passwordInputChangeHandler(event) {
    this.setState({
      password: event.target.value
    });
  }
   render(){
       return (
        <Form onSubmit={this.onSubmitHandler.bind(this)}>
        <h3 className="text-center text-info">Login</h3>
        <div className="form-group">
          <label htmlFor="email" className="text-info">Email:</label><br />
          <input
            id="email"
            className="form-control"
            type="email"
            name="email"
            placeholder="example@domain.com"
            onChange={this.emailInputChangeHandler}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-info">Password:</label><br />
          <input
            id="password"
            className="form-control"
            type="password"
            name="password"
            placeholder="********"
            onChange={this.passwordInputChangeHandler}
            required />
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <button onClick={this.onSubmitHandler} className="btn btn-info btn-md" type="button">Submit</button>
          <Link to="/signUp" className="text-info">Sign Up here</Link>
        </div>
      </Form>

       );
   }
}
export default SignIn;
import React from 'react';
import {Link} from 'react-router-dom';

import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
  } from "semantic-ui-react";

class Register extends React.Component{
    render(){
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" icon color="green" textAlign="center">
              <h1>Register to ReactPro</h1> 
               <h1>Register to ReactPro</h1> 
               
              </Header>
              <Form size="large" >
                <Segment stacked>
                  <Form.Input
                    fluid
                    name="username"
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    
                    type="text"
                  />
    
                  <Form.Input
                    fluid
                    name="email"
                    icon="google plus square"
                    iconPosition="left"
                    placeholder="Email" 
                    
                    type="email"
                  />
    
                  <Form.Input
                    fluid
                    name="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                   
                    type="password"
                  />
    
                  <Form.Input
                    fluid
                    name="passwordConfirmation"
                    icon="repeat"
                    iconPosition="left"
                    placeholder="Password Confirmation"
                    
                    type="password"
                  />
    
                  <Button color="green" fluid size="large">
                    Submit
                  </Button>
                </Segment>
              </Form>
              
              <Message>
                Already a user? <Link to="/login">Login</Link>
              </Message>
            </Grid.Column>
          </Grid>
        );
    }
}
export default Register;
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

class Login extends React.Component{
    render(){
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h1" icon color="violet" textAlign="center">
              <h1>Login to ReactPro</h1>
                <h1>Login to ReactPro</h1>
              </Header>
              <Form size="large" >
                <Segment stacked>
    
                  <Form.Input
                    fluid
                    name="email"
                    icon="mail"
                    iconPosition="left"
                    placeholder="Email Address"
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
    
                  
    
                  <Button color="violet" fluid size="large">
                    Submit
                  </Button>
                </Segment>
              </Form>
              <Message>
                Don't have an account ? <Link to="/register">Register</Link>
              </Message>
            </Grid.Column>
          </Grid>
        );
    }
}
export default Login;
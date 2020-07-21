import React from 'react';
import {Link } from 'react-router-dom';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <Menu fixed='top' inverted>
                <Container>
                   <Menu.Item as='a' header>
          
                   <Link to="/">ReactPro</Link>
                     </Menu.Item>
                   <Menu.Item as='a'><Link to="/register">Register</Link></Menu.Item>
                  <Menu.Item as='a'><Link to="/login">Login</Link></Menu.Item>
        

                 </Container>
                  </Menu>
            </div>

        );
    }
}
export default Navbar;
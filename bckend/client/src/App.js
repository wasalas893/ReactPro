import React,{Fragment} from 'react';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


const App = () => (
  <Router>
  <Fragment>
    <Navbar/>
    
    <Route exact path='/register' component={Register}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/' component={Landing}/>
  </Fragment>    
    
  </Router>
)

export default App;
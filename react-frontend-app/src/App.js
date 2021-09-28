import React from 'react';
import './App.css';
import Home from './Component/Home';
// import Scn from './Component/Scn';
import UserComponent from './Component/UserComponent';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import contact from './Component/contact';
import Domain from './Component/Domain';
import CaseStatus from './Component/contact';
import AddUser from './Component/AddUser.js';

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/Scn' component={Scn} /> */}
        <Route path='/UserComponent' component={UserComponent} />
        <Route path='/contact' component={contact} />
        <Route path='/home' component={Home} />
        <Route path='/Domain' component={Domain} />
        <Route path='/CaseStatus' component={CaseStatus} />
        <Route path='/AddUser' component={AddUser} />
        
      </Switch>
    </Router>
    </div>
  )
}

export default App

import React from 'react';
import './App.css';




import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Athlete from "./Athlete";
import Fan from "./Fan";
import About from "./About";
import Footer from "./Footer";
import Coach from "./Coach"


function App() {
  return(
      <Router>
      <div>
        <Nav/>
        

        <Switch>
        <Route path='/' exact component={Home}/>
          <Route path='/Athlete' component={Athlete}/>
          <Route path='/Fan'  component={Fan}/>
          <Route path='/About'  component={About}/>
          <Route path='/Coach'  component={Coach}/>
          </Switch>
         
          <Footer/>

      </div>
      </Router>
  );
}


  





















 




export default App;
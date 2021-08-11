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
import Soon from  "./Soon"
import { TimerSharp } from '@material-ui/icons';
import axios from 'axios';



handleSubmit = item => {
    this.toggle();
    if (item.id) {
    axios
        .put(`http://localhost:8000/webapi/accounts/${item.id}/`, item)
        .then(res => this.refreshList());
    return;
    }
    axios
      .post("http://localhost:8000/webapi/accounts/", item)
      .then(res => this.refreshList());
};
handleDelete = item => {
    axios
        .delete(`http://localhost:8000/webapi/accounts/${item.id}`)
        .then(res => this.refreshList());
};

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
          <Route path='/Soon'  component={Soon}/>
          <Footer/>

      </div>
      </Router>
  );
}


  





















 




export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage/home';
import AboutPage from './pages/aboutPage/about';
import ResearchPage from './pages/researchPage/research';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         {/* <NavBar /> */}
         <Router>
           <Switch>
             <Route exact path="/" component={HomePage} />
             <Route exact path="/about" component={AboutPage} />
             <Route exact path="/research" component={ResearchPage} />
             </Switch>
             </Router>
      </div>
    );
  }
}

export default App;

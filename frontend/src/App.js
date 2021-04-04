import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from './pages/Home';
import ScribblePro from './pages/ScribblePro';
import Dashboard from "./pages/Dashboard";
import Dotism from './pages/Dotism';
import Learn from './pages/Learn';
import Flow from "./pages/Flow";



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/scribble-pro' component={ScribblePro} />
          <Route path='/dot-ism' component={Dotism} />
          <Route path='/learn' component={Learn} />
          <Route path='/flow' component={Flow} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

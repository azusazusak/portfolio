import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import ScrollToTop from "./scrollToTop"
import Home from "./pages/Home/Home";
import Project from './pages/Project/Project'
import './css/App.scss';
import puff from "./assets/imgs/puff_single_color.png";

function App() {

  var h = window.outerHeight;
  console.log(h);

  return (
    <div className="wrapper">
      <img src={puff} alt="puff" className="puff" />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:projectName" exact component={Project} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

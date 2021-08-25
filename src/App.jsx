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

  return (
    <>
      <img src={puff} alt="puff" className="puff puff_1" />
      <img src={puff} alt="puff" className="puff puff_2" />
      <img src={puff} alt="puff" className="puff puff_3" />
      <img src={puff} alt="puff" className="puff puff_4" />
      <img src={puff} alt="puff" className="puff puff_5" />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:projectName" exact component={Project} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

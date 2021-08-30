import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
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
      <HashRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:projectName" component={Project} />
        </Switch>
      </HashRouter>
      <h5 className="copyright">&copy; 2021 Azusa Kunigo All rights reserved. </h5>
    </>
  );
}

export default App;

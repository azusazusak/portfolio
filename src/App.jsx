import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import ScrollToTop from "./scrollToTop"
import Puffs from "./components/commonParts/Puffs/Puffs";
import Home from "./pages/Home/Home";
import Project from './pages/Project/Project'
import './css/App.scss';

function App() {

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Switch>          
          <Route exact path="/" component={Home} />
          <Route exact path="/:projectName" component={Project} />
        </Switch>
      </HashRouter>
      <Puffs />
      <h5 className="copyright">&copy; 2021 Azusa Kunigo All Rights Reserved. </h5>
    </>
  );
}

export default App;

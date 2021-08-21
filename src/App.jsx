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

function App() {
  return (
    <>
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

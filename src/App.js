import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar/index';
import Works from './components/Works';
import About from './components/About/index';
import Resume from './components/Resume';
import Footer from './components/Footer/index';

function App () {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/works">
              <Works />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
}

export default App;

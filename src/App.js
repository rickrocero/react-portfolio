import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar/index';
import Project from './components/Projects/index';
import About from './components/About/index';
import Resume from './components/Resume';
import Footer from './components/Footer/index';
import ProjectCard from './components/ProjectCard';
import projects from './projects.json';

function App () {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/projects">
              <Project />
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

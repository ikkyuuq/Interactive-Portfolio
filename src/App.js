import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import Introduction from './components/Introduction'
import JourneySection from './components/JourneySection';
import Collection from './components/Collection'
import Footer from './components/Footer'
import About from './components/About'
import Works from './components/Works'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path="/">
            <Introduction/>
            <JourneySection/>
            <Collection/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works/>
          </Route>
        </Switch>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;

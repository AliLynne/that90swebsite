import React, { Component } from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import Guestbook from './components/Guestbook'
import AboutMe from './components/AboutMe'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <Guestbook />
        <Counter count="938759" />
      </div>
    );
  }
}

export default App;

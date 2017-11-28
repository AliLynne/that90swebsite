import React, { Component } from 'react';
import Title from './Title'
import Counter from './Counter'
import Construction from './Construction'
import Guestbook from './Guestbook'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title text="That 90's Website" />
        <Construction />
        <Title text="Welcome to my Homepage!!!!!" />
        <Counter count="000000" />
        <Guestbook />
      </div>
    );
  }
}

export default App;

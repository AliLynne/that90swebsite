import React, { Component } from 'react';
import Title from './Title'
import Counter from './Counter'
import Construction from './Construction'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title text="That 90's Website"/>
        <Construction />
        <Counter count="000000"/>
      </div>
    );
  }
}

export default App;

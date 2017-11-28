import React, { Component } from 'react'
import '../css/Counter.css'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Visitors: </h1>
        <h2>{this.props.count}</h2>
      </div>
    )
  }
}

export default Counter

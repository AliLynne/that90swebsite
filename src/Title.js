import React, { Component } from 'react'
import './Title.css'

class Title extends Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    )
  }
}

export default Title

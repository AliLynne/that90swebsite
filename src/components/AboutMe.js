import React, { Component } from 'react'
import Title from './Title'
import '../css/AboutMe.css'

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Title text="About Me!!!" />
        <p>Curabitur nisl odio, molestie at malesuada et, maximus quis dui. Cras non sapien purus. Praesent sollicitudin, orci quis tristique suscipit, tortor metus sagittis est, vel varius mauris justo eu erat. Cras congue eros id blandit dignissim. Phasellus facilisis a tellus a sodales. Pellentesque libero lectus, tempus vitae sodales non, lacinia in turpis.</p>
      </div>
    )
  }
}

export default AboutMe

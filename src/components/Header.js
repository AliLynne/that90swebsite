import React, { Component } from 'react'
import Construction from './Construction'
import Title from './Title'
import Navbar from './Navbar'


class Header extends Component {
  render() {
    return (
      <div className="header">
        <Title text="That 90's Website" />
        <Construction />
        <Navbar />
      </div>
    )
  }
}

export default Header

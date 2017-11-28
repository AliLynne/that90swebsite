import React, { Component } from 'react'
import GuestbookForm from './GuestbookForm'
import Title from './Title'

class Guestbook extends Component{
  render() {
    return(
      <div>
        <img src={require('./guestbook.gif')} alt="Sign the Guestbook"/>
        <GuestbookForm />
      </div>
    )
  }
}

export default Guestbook

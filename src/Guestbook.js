import React, { Component } from 'react'
import GuestbookForm from './GuestbookForm'
import GuestbookPost from './GuestbookPost'
import Title from './Title'

class Guestbook extends Component{
  render() {
    return(
      <div>
        <img src={require('./guestbook.gif')} alt="Sign the Guestbook"/>
        <GuestbookForm />
        <GuestbookPost />
      </div>
    )
  }
}

export default Guestbook

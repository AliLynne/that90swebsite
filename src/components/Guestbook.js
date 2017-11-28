import React, { Component } from 'react'
import GuestbookForm from './GuestbookForm'
import GuestbookPost from './GuestbookPost'

class Guestbook extends Component{
  render() {
    return(
      <div>
        <img src={require('../img/guestbook.gif')} alt="Sign the Guestbook"/>
        <GuestbookForm />
        <GuestbookPost />
        <GuestbookPost />
      </div>
    )
  }
}

export default Guestbook

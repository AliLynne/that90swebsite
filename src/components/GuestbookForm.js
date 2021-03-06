import React, { Component } from 'react'
import '../css/GuestbookForm.css'

class GuestbookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email address: (hidden)
          <input type="text" />
        </label>
        <br />
        <label>
          Message:
          <textarea rows={4} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default GuestbookForm

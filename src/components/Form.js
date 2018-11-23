import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  state = {
    user: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      dateOfExam: '',
      about: '',
      contact: ''
    }
  }

  firstName = React.createRef()
  lastName = React.createRef()
  age = React.createRef()
  gender = React.createRef()
  dateOfExam = React.createRef()
  about = React.createRef()
  contact = React.createRef()

  updateInput = event => {
    const input = event.target

    this.setState({
      user: { ...this.state.user, [input.name]: event.target.value }
    })
  }

  handleSubmit = () => {
    this.props.newCard(this.state.user)

    this.firstName.current.value = ''
    this.lastName.current.value = ''
    this.age.current.value = ''
    this.gender.current.value = ''
    this.dateOfExam.current.value = ''
    this.about.current.value = ''
    this.contact.current.value = ''

    this.firstName.current.focus()
  }

  render() {
    return (
      <section>
        <input
          ref={this.firstName}
          name="firstName"
          placeholder="first name"
          onChange={this.updateInput}
        />
        <input
          ref={this.lastName}
          name="lastName"
          placeholder="last name"
          onChange={this.updateInput}
        />
        <input
          ref={this.age}
          name="age"
          placeholder="age"
          onChange={this.updateInput}
        />
        <input
          ref={this.gender}
          name="gender"
          placeholder="gender"
          onChange={this.updateInput}
        />
        <input
          ref={this.dateOfExam}
          name="dateOfExam"
          placeholder="dateOfExam"
          onChange={this.updateInput}
        />
        <input
          ref={this.about}
          name="about"
          placeholder="about me"
          onChange={this.updateInput}
        />
        <input
          ref={this.contact}
          name="contact"
          placeholder="insert mailadress"
          onChange={this.updateInput}
        />
        <button onClick={this.handleSubmit}>submit</button>
      </section>
    )
  }
}

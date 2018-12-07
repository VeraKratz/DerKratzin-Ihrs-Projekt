import React, { Component } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'
import { NavLink } from 'react-router-dom'

const StyledTextarea = styled(Textarea)`
  min-height: 100px;
`

const Wrapper = styled.section`
  display: grid;
  grid-gap: 25px;
  margin: 70px 20px;

  input {
    border-radius: 5px;
    padding: 5px;
  }
  button {
    height: 50px;
    background: #395e93;
    color: white;
    font-size: 17px;
    border-radius: 4px;
    border: 0;
  }
`

export default class Form extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      about: '',
      contact: ''
    }
  }

  firstName = React.createRef()
  lastName = React.createRef()
  age = React.createRef()
  gender = React.createRef()
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
    this.about.current.value = ''
    this.contact.current.value = ''

    this.firstName.current.focus()
  }

  render() {
    return (
      <Wrapper>
        <input
          ref={this.firstName}
          name="firstName"
          placeholder="Vorname"
          onChange={this.updateInput}
        />
        <input
          ref={this.lastName}
          name="lastName"
          placeholder="Nachname"
          onChange={this.updateInput}
        />
        <input
          ref={this.age}
          name="age"
          placeholder="Alter"
          onChange={this.updateInput}
        />
        <input
          ref={this.gender}
          name="gender"
          placeholder="Geschlecht"
          onChange={this.updateInput}
        />

        <input
          ref={this.contact}
          name="contact"
          placeholder="Trage hier bitte deine Mailadresse ein"
          onChange={this.updateInput}
        />
        <StyledTextarea
          ref={this.about}
          name="about"
          placeholder="Erzähl hier was über dich"
          onChange={this.updateInput}
        />
        <NavLink exact to="/thankyouscreen">
          <button onClick={this.handleSubmit}>Anlegen</button>
        </NavLink>
      </Wrapper>
    )
  }
}

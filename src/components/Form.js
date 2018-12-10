import React, { Component } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'
import { NavLink } from 'react-router-dom'

const StyledTextarea = styled(Textarea)`
  min-height: 100px;
  border-radius: 5px;
  padding: 11px;
  height: 30px;
  font-size: 14px;
  padding-left: 4px;
  border-style: solid;
  border-color: #4d607f;
`

const Wrapper = styled.form`
  display: grid;
  grid-gap: 20px;
  margin: 15px 21px;
  overflow-y: scroll;

  input {
    border-radius: 5px;
    padding: 11px;
    height: 30px;
    font-size: 14px;
    padding-left: 4px;
    border-width: 2px;
    border-style: solid;
    /*border-color: #4d607f;*/
    border: none;
    background: #4d607f;
    border-image: initial;
    border-radius: 4px;
  }
  button {
    height: 35px;
    background: #395e93;
    color: white;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 4px;
    border: 2px solid black;
  }
  a {
    color: navy;
    text-decoration: none;
  }

  .checkbox {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 5px;
  }
  .gender {
    display: block;
  }
`

export default class Form extends Component {
  state = {
    completeCard: false,
    user: {}
  }

  firstName = React.createRef()
  lastName = React.createRef()
  age = React.createRef()
  gender = React.createRef()
  about = React.createRef()
  contact = React.createRef()

  verifyState() {
    if (
      this.state.user.firstName &&
      this.state.user.lastName &&
      this.state.user.age &&
      this.state.user.gender &&
      this.state.user.about &&
      this.state.user.contact
    ) {
      this.setState({
        completeCard: true
      })
    }
  }

  updateInput = event => {
    if (event.target) {
      const input = event.target

      this.setState({
        user: { ...this.state.user, [input.name]: event.target.value }
      })
    }
    this.verifyState()
  }

  handleSubmit = () => {
    this.props.completeCard && this.props.newCard(this.state.user)

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
        <h2>Anmeldung für den Seglerpool</h2>
        <h3>Bitte füll das Anmeldeformular vollständig aus</h3>
        <input
          type="text"
          required={true}
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
        <label>Erzähl hier etwas über Dich</label>
        <StyledTextarea
          ref={this.about}
          name="about"
          placeholder="Erzähl hier was über dich"
          onChange={this.updateInput}
        />
        <NavLink
          exact
          to={`/thankyouscreen/${
            this.state.completeCard ? 'complete' : 'incomplete'
          }`}
        >
          <button onClick={this.handleSubmit}>Anlegen</button>
        </NavLink>
      </Wrapper>
    )
  }
}

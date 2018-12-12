import React, { Component } from 'react'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'
import { NavLink } from 'react-router-dom'

const StyledTextarea = styled(Textarea)`
  font-family: 'Antic', sans-serif;
  color: #47464a;
  min-height: 100px;
  border-radius: 5px;
  padding: 11px;
  height: 30px;
  font-size: 14px;
  padding-left: 4px;
  border-style: solid;
  background: #dbe6f7;
  border: none;
`

const Wrapper = styled.form`
  display: grid;
  grid-gap: 10px;
  margin: 15px 21px;
  overflow-y: scroll;

  input {
    font-family: 'Antic', sans-serif;
    color: #47464a;
    padding: 11px;
    height: 30px;
    font-size: 14px;
    padding-left: 4px;
    /*border-width: 2px;
    border-style: solid;
    border-color: #4d607f;*/
    border: none;
    background: #dbe6f7;
    border-image: initial;
    border-radius: 4px;
  }
  button {
    font-family: 'Antic', sans-serif;
    color: #47464a;
    height: 35px;
    background: #395e93;
    color: white;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-radius: 4px;
    /*border: 2px solid black;*/
  }
  a {
    color: navy;
    text-decoration: none;
  }
  h2 {
    margin: 0px;
  }
  p {
    margin: 0px;
    font-size: 19px;
    line-height: 23px;
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
    this.state.completeCard && this.props.newCard(this.state.user)
  }

  render() {
    return (
      <Wrapper>
        <h2>Anmeldung Seglerkartei</h2>
        <p>Bitte füll das Anmeldeformular vollständig aus:</p>
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
        <label>Erzähl hier etwas über dich:</label>
        <StyledTextarea
          ref={this.about}
          name="about"
          placeholder="Wer bist du? Wen suchst du?"
          onChange={this.updateInput}
        />
        <NavLink
          exact
          to={`/thankyouscreen/${
            this.state.completeCard ? 'complete' : 'incomplete'
          }`}
        >
          <button onClick={() => this.handleSubmit()}>Anlegen</button>
        </NavLink>
      </Wrapper>
    )
  }
}

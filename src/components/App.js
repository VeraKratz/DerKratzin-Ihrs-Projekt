import React, { Component } from 'react'
import Card from './Card'
import Form from './Form'

export default class App extends Component {
  state = {
    personData: []
  }

  handleClick(newUser) {
    this.setState({ personData: [newUser, ...this.state.personData] })
  }

  // handleClick = event => {
  //   event.preventDefault()
  //   const input = event.target.value
  //   console.log(input)

  //   input.value = ''
  //   input.focus()
  // }

  renderPersonData() {
    return this.state.personData
  }

  render() {
    return (
      <div>
        <Form newCard={user => this.handleClick(user)} />
        {/* <Card user={this.state.user} /> */}
        <div>
          {this.state.personData.map(user => (
            <Card
              firstName={user.firstName}
              lastName={user.lastName}
              age={user.age}
              gender={user.gender}
              dateOfExam={user.dateOfExam}
              about={user.about}
              contact={user.contact}
            />
          ))}
        </div>
      </div>
    )
  }
}

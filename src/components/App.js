import React, { Component } from 'react'
import Card from './Card'
import Form from './Form'
import Menu from './Menu'

export default class App extends Component {
  state = {
    personData: []
  }

  addUser = newUser => {
    this.setState({ personData: [newUser, ...this.state.personData] })
  }

  renderPersonData() {
    return this.state.personData
  }

  render() {
    return (
      <div>
        <div>
          <Menu />
        </div>
        <Form newCard={user => this.addUser(user)} />
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

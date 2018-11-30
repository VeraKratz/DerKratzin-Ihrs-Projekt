import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
  render() {
    return (
      <div>
        {this.propsallUsers.map(user => (
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
    )
  }
}

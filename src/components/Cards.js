import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
  render() {
    console.log('personData: ' + this.props.allUsers)
    return (
      <div>
        {this.props.allUsers.map((user, index) => (
          <Card
            key={index}
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

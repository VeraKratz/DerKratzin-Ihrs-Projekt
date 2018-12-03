import React, { Component } from 'react'
import Card from './Card'

export default class Cards extends Component {
  render() {
    console.log('personData: ' + this.props.allUsers)
    return (
      <div>
        {this.props.allUsers.map((user, index) => (
          <Card
            image={user.image}
            key={index}
            firstName={user.firstName}
            lastName={user.lastName}
            age={user.age}
            gender={user.gender}
            contact={user.contact}
            about={user.about}
          />
        ))}
      </div>
    )
  }
}

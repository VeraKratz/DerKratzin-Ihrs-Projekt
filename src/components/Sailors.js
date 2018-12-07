import React, { Component } from 'react'
import Card from './Card'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow-y: scroll;
`

export default class Cards extends Component {
  render() {
    console.log('personData: ' + this.props.allUsers)
    return (
      <Wrapper>
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
            handleBookmark={() => this.props.bookmark(user.userId)}
            handleDeleteSailor={() => this.props.delete(user.userId)}
            marked={user.marked}
          />
        ))}
      </Wrapper>
    )
  }
}

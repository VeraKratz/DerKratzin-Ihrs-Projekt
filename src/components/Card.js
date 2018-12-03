import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  height: 350px;
  margin: 23px;
  background: white;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border-radius: 4px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    'image name'
    '. .'
    'about about'
    'contact .';
`

const UserImage = styled.img`
  grid-area: image;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`
const NameArea = styled.div`
  grid-area: name;
  margin-right: auto;
`
const AboutArea = styled.div`
  grid-area: about;
`
const Contact = styled.div`
  grid-area: contact;
`

export default class Card extends Component {
  render() {
    return (
      <StyledCard>
        <UserImage
          src="https://images.unsplash.com/photo-1500561607578-e542f3149b97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f82f44e65cb4765da10c3d7f0a85e7cc&auto=format&fit=crop&w=2734&q=80"
          alt="random"
        />
        <NameArea>
          <div>{this.props.firstName}</div>
          <div>{this.props.lastName}</div>
        </NameArea>
        <span>{this.props.age}</span>
        <span>{this.props.gender}</span>
        <AboutArea>{this.props.about}</AboutArea>
        <Contact>{this.props.contact}</Contact>
      </StyledCard>
    )
  }
}

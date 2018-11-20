import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  height: 350px;
  margin: 5px;
  background: #d4dde2a1;
  border-radius: 20px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas:
    'image name'
    '. .'
    '. .'
    'about about'
    'contact .';
`

const UserImage = styled.img`
  grid-area: image;
  width: 100px;
  height: 100px;
  object-fit: cover;
`
const NameArea = styled.div`
  grid-area: name;
  margin-right: auto;
`
const AboutArea = styled.div`
  grid-area: about;
`

const DateOfExam = styled.div`
  grid-column: span 2;
`
const Contact = styled.div`
  grid-area: contact;
`

export default class Card extends Component {
  render() {
    const user = {
      firstName: 'Vera',
      lastName: 'Kratz',
      age: 'age 34',
      gender: 'female',
      dateOfExam: '13.12.2018',
      about:
        'Of course he is a happy little stone, cause we dont have any other kind. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. There comes a nice little fluffer. Maybe he has a little friend that lives right over here. I thought today we would make a happy little stream that is just running through the woods here.',
      contact: 'mail me @ HabeDieEhre@Servus.com'
    }

    return (
      <StyledCard>
        <UserImage
          src="https://images.unsplash.com/photo-1500561607578-e542f3149b97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f82f44e65cb4765da10c3d7f0a85e7cc&auto=format&fit=crop&w=2734&q=80"
          alt="random"
        />
        <NameArea>
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
        </NameArea>
        <span>{user.age}</span>
        <span>{user.gender}</span>
        <DateOfExam>{user.dateOfExam}</DateOfExam>
        <AboutArea>{user.about}</AboutArea>
        <Contact>{user.contact}</Contact>
      </StyledCard>
    )
  }
}

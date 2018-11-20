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

const UserImage = styled.div`
  grid-area: image;
`
const NameArea = styled.div`
  grid-area: name;
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
        <UserImage>userimage</UserImage>
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

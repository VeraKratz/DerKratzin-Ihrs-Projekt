import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px auto;
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
        'Of course he is a happy little stone, cause we dont have any other kind. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. There comes a nice little fluffer. Maybe he has a little friend that lives right over here. I thought today we would make a happy little stream that is just running through the woods here.'
    }
    return (
      <StyledCard>
        <div>userimage</div>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
        <span>{user.age}</span>
        <span>{user.gender}</span>
        <div>{user.dateOfExam}</div>
        <p>{user.about}</p>
      </StyledCard>
    )
  }
}

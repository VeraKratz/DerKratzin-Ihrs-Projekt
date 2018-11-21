import React, { Component } from 'react'
import Card from './Card'
import Form from './Form'

export default class App extends Component {
  state = {
    personData: [
      {
        firstName: 'Vera',
        lastName: 'Kratz',
        age: 'age 34',
        gender: 'female',
        dateOfExam: '13.12.2018',
        about:
          'Of course he is a happy little stone, cause we dont have any other kind. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. There comes a nice little fluffer. Maybe he has a little friend that lives right over here. I thought today we would make a happy little stream that is just running through the woods here.',
        contact: 'mail me @ HabeDieEhre@Servus.com'
      },
      {
        firstName: 'Mini',
        lastName: 'Mouse',
        age: 'age 38',
        gender: 'female',
        dateOfExam: '13.12.2018',
        about:
          'Of course he is a happy little stone, cause we dont have any other kind. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. There comes a nice little fluffer. Maybe he has a little friend that lives right over here. I thought today we would make a happy little stream that is just running through the woods here.',
        contact: 'mail me @ HabeDieEhre@Servus.com'
      },
      {
        firstName: 'Daisy',
        lastName: 'Duck',
        age: 'age 41',
        gender: 'female',
        dateOfExam: '13.12.2018',
        about:
          'Of course he is a happy little stone, cause we dont have any other kind. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. There comes a nice little fluffer. Maybe he has a little friend that lives right over here. I thought today we would make a happy little stream that is just running through the woods here.',
        contact: 'mail me @ HabeDieEhre@Servus.com'
      }
    ],
    user: {
      firstName: 'Donald',
      lastName: 'Duck',
      age: 'age 55',
      gender: 'male',
      dateOfExam: '13.12.2018',
      about:
        'Of course he is a happy little stone, cause we dont have any other kind. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. There comes a nice little fluffer. Maybe he has a little friend that lives right over here. I thought today we would make a happy little stream that is just running through the woods here.',
      contact: 'mail me @ HabeDieEhre@Servus.com'
    }
  }

  handleClick(newUser) {
    this.setState({ user: newUser })
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
        <Card user={this.state.user} />
        <Form newCard={user => this.handleClick(user)} />
      </div>
    )
  }
}

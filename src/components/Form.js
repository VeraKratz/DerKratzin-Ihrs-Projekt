import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    user: {
      firstName: 'Vera',
      lastName: 'Kratz',
      age: 'age 34',
      gender: 'female',
      dateOfExam: '13.12.2018',
      about:
        'Of course he is a happy little stone, cause we dont have any other kind. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. There comes a nice little fluffer. Maybe he has a little friend that lives right over here. I thought today we would make a happy little stream that is just running through the woods here.',
      contact: 'mail me @ HabeDieEhre@Servus.com'
    }
  }

  render() {
    const { user } = this.state
    return (
      <section>
        <input
          placeholder="first name"
          onChange={event =>
            this.setState({ user: { ...user, firstName: event.target.value } })
          }
          // onChange={this.handleChange}
        />
        <input placeholder="last name" />
        <input placeholder="age" />
        <input placeholder="gender name" />
        <input placeholder="dateOfExam" />
        <input placeholder="about me" />
        <input placeholder="insert mailadress" />
        <button onClick={() => this.props.newCard(user)}>submit</button>
      </section>
    )
  }
}

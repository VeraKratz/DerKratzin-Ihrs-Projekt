import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Form extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  state = {
    user: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      dateOfExam: '',
      about: '',
      contact: ''
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
        <input
          placeholder="last name"
          onChange={event =>
            this.setState({ user: { ...user, lastName: event.target.value } })
          }
        />
        <input
          placeholder="age"
          onChange={event =>
            this.setState({ user: { ...user, age: event.target.value } })
          }
        />
        <input
          placeholder="gender "
          onChange={event =>
            this.setState({ user: { ...user, gender: event.target.value } })
          }
        />
        <input
          placeholder="dateOfExam"
          onChange={event =>
            this.setState({
              user: { ...user, dateOfExam: event.target.value }
            })
          }
        />
        <input
          placeholder="about me"
          onChange={event =>
            this.setState({ user: { ...user, about: event.target.value } })
          }
        />
        <input
          placeholder="insert mailadress"
          onChange={event =>
            this.setState({
              user: { ...user, contact: event.target.value }
            })
          }
        />
        <button onClick={() => this.props.newCard(user)}>submit</button>
      </section>
    )
  }
}

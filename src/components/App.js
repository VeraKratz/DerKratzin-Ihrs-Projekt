import React, { Component } from 'react'
import { BrowserRouter as Router, Route /*NavLink*/ } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import Sailors from './Sailors'
import Form from './Form'
import sailors from '../data/sailors'
import Navbar from './Navbar'
import Header from './Header'
import ThankYouScreen from './Thankyouscreen'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 85px auto 71px;
  height: 100vh;
`

export default class App extends Component {
  state = {
    personDatas: this.load()
  }

  save() {
    localStorage.setItem(
      'prüsse-app-sailors',
      JSON.stringify(this.state.personDatas)
    )
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('prüsse-app-sailors')) || sailors
    } catch (err) {
      return []
    }
  }

  addUser = newUser => {
    this.setState({
      personDatas: [newUser, ...this.state.personDatas]
    })
  }

  renderPersonData = () => {
    return this.state.personDatas
  }

  toggleBookmark = id => {
    const { personDatas } = this.state
    const index = personDatas.findIndex(person => person.userId === id)
    const toggleDone = [
      ...personDatas.slice(0, index),
      { ...personDatas[index], marked: !personDatas[index].marked },
      ...personDatas.slice(index + 1)
    ]

    this.setState({
      personDatas: toggleDone
    })
  }

  deleteSailor = id => {
    const { personDatas } = this.state
    const index = personDatas.findIndex(person => person.userId === id)
    const newPersonData = [
      ...personDatas.slice(0, index),
      ...personDatas.slice(index + 1)
    ]

    this.setState({
      personDatas: newPersonData
    })
  }

  render() {
    this.save()
    return (
      <Router>
        <Wrapper>
          <Header />
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/form"
            render={() => <Form newCard={user => this.addUser(user)} />}
          />
          <Route
            exact
            path="/sailors"
            render={() => (
              <Sailors
                bookmark={id => this.toggleBookmark(id)}
                delete={id => this.deleteSailor(id)}
                allUsers={this.state.personDatas}
              />
            )}
          />
          <Route
            exact
            path="/thankyouscreen/:result"
            render={({ match }) => (
              <ThankYouScreen
                completeCard={match.params.result === 'complete'}
              />
            )}
          />
          <Route
            exact
            path="/markedSailors"
            render={() => (
              <Sailors
                bookmark={id => this.toggleBookmark(id)}
                delete={id => this.deleteSailor(id)}
                allUsers={this.state.personDatas.filter(
                  person => person.marked === true
                )}
              />
            )}
          />
          <Navbar />
        </Wrapper>
      </Router>
    )
  }
}

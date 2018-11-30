import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Home from './Home'
import Cards from './Card'
import Form from './Form'

const Wrapper = styled.div`
  background-color: green;
`

const NavBar = styled.nav`
  background: red;
`
const StyledNavLink = styled(NavLink)`
  margin-right: 20px;
`

export default class App extends Component {
  state = {
    personData: []
  }

  addUser = newUser => {
    this.setState({ personData: [newUser, ...this.state.personData] })
  }

  renderPersonData() {
    return this.state.personData
  }

  links = [
    { label: 'Home', link: 'http://www.pruesse.de/' },
    { label: 'About', link: '#about' },
    { label: 'Become a new user', link: '#become a new user' },
    { label: 'Sailors', link: '#sailors' }
  ]

  render() {
    return (
      <Router>
        <Wrapper>
          <NavBar>
            <StyledNavLink exact to="/">
              home
            </StyledNavLink>
            <StyledNavLink exact to="/form">
              form
            </StyledNavLink>
            <StyledNavLink exact to="/cards">
              cards
            </StyledNavLink>
          </NavBar>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/form"
            render={() => <Form newCard={user => this.addUser(user)} />}
          />
          <Route
            exact
            path="/cards"
            render={() => <Cards allUsers={this.state.personData} />}
          />
        </Wrapper>
      </Router>
    )
  }
}

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Home from './Home'
import Cards from './Cards'
import Form from './Form'

const Wrapper = styled.div``

const NavBar = styled.nav`
  background-color: white;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 40px;
  position: relative;
`

const StyledNavLink = styled(NavLink)``

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

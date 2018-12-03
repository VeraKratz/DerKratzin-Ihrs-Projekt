import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import sailors from '../sailors.json'
import Home from './Home'
import Cards from './Cards'
import Form from './Form'

const LogoImage = styled.img`
  height: 85px;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr;
`

const NavBar = styled.nav`
  background-color: #ebe5e1;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  padding: 0 15px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  font-family: 'Text Me One', sans-serif;
`

const StyledNavLink = styled(NavLink)`
  margin-right: 10px;
  text-decoration: overline;
  color: #4460a9;
  text-decoration-color: #d03d3d;
  &.active {
    color: #d03d3d;
  }
`

export default class App extends Component {
  state = {
    personData: sailors
  }

  saveToLocalStorage() {}

  addUser = newUser => {
    this.setState({ personData: [newUser, ...this.state.personData] })
  }

  renderPersonData() {
    return this.state.personData
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <NavBar>
            <LogoImage src="../../img/logo1.png" />
            <StyledNavLink exact to="/">
              HOME
            </StyledNavLink>
            <StyledNavLink exact to="/form">
              ANMELDUNG
            </StyledNavLink>
            <StyledNavLink exact to="/cards">
              SEGLER
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

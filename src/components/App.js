import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import Cards from './Cards'
import Form from './Form'
import sailors from '../data/sailors'

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
    this.setState({ personDatas: [newUser, ...this.state.personDatas] })
  }

  renderPersonData = () => {
    return this.state.personDatas
  }

  toggleBookmark = id => {
    const { personDatas } = this.state
    const index = personDatas.findIndex(person => person.userId === id)
    console.log(index)
    const toggleDone = [
      ...personDatas.slice(0, index),
      { ...personDatas[index], marked: !personDatas[index].marked },
      ...personDatas.slice(index + 1)
    ]

    this.setState({
      personDatas: toggleDone
    })
  }

  render() {
    this.save()
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
            <StyledNavLink exact to="/marked">
              MEINE KONTAKTE
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
            render={() => (
              <Cards
                bookmark={id => this.toggleBookmark(id)}
                allUsers={this.state.personDatas}
              />
            )}
          />
          <Route
            exact
            path="/marked"
            render={() => (
              <Cards
                bookmark={id => this.toggleBookmark(id)}
                allUsers={this.state.personDatas.filter(
                  person => person.marked === true
                )}
              />
            )}
          />
        </Wrapper>
      </Router>
    )
  }
}

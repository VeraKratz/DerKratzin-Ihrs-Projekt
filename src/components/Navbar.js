import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.nav`
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

export default class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <StyledNavLink exact to="/">
          HOME
        </StyledNavLink>
        <StyledNavLink exact to="/form">
          ANMELDUNG
        </StyledNavLink>
        <StyledNavLink exact to="/Sailors">
          SEGLER
        </StyledNavLink>
        <StyledNavLink exact to="/markedSailors">
          KONTAKTE
        </StyledNavLink>
      </Wrapper>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SectionLayout = styled.section`
  display: flex;
  align-items: center;
  grid-row-start: 2;
`

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
  padding: 0 40px;
  position: relative;
  margin: 23px;
  border-radius: 4px;
  padding-bottom: 37px;
`

const StyledNavLink = styled(NavLink)`
  margin-right: 10px;
  text-decoration: underline;
  color: #4460a9;
  text-decoration-color: #d03d3d;
  &.active {
    color: #d03d3d;
  }
  font-family: 'Text Me One', sans-serif;
`

export default class Thankyouscreen extends Component {
  render() {
    return (
      <SectionLayout>
        {this.props.completeCard ? (
          <Wrapper>
            <h1>Vielen Dank für deine Anmeldung! </h1>
            <p>Willkommen in unserer Seglerkartei!</p>
            <p>
              Schau dich am besten gleich mal nach spannenden Segelpartnerinnen
              und Segelpartnern um. Dazu geht es hier entlang:
            </p>
            <StyledNavLink exact to="/Sailors">
              SEGLER
            </StyledNavLink>
          </Wrapper>
        ) : (
          <Wrapper>
            <h1>Hey, schön, dass du dich anmelden möchtest!</h1>
            <p>
              Damit es beim nächsten Mal klappt, füll bitte das Formular
              vollständig aus.
            </p>
            <StyledNavLink exact to="/form">
              ANMELDUNG
            </StyledNavLink>
          </Wrapper>
        )}
      </SectionLayout>
    )
  }
}

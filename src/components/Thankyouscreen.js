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
        <Wrapper>
          <h1>Vielen Dank für Deine Anmeldung ! </h1>
          <p>
            Wir freuen uns, Dich in unserer Seglerkartei willkommen zu heißen!
            Schau Dich am Besten gleich mal nach spannenden SegelpartnerInnen
            und Segelpartnern in unserer Seglerkatei um. Dazu geht es hier
            entlang.
            <StyledNavLink exact to="/Sailors">
              SEGLER
            </StyledNavLink>
          </p>
        </Wrapper>
      </SectionLayout>
    )
  }
}

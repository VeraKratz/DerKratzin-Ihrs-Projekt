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
    font-family: 'Text Me One', sans-serif;
  }

  br {
    margin: 3px;
  }
  h1 {
    font-family: 'Text Me One', sans-serif;
  }
`

export default class Home extends Component {
  render() {
    return (
      <SectionLayout>
        <Wrapper>
          <h1> AHOI ! </h1>
          <p>
            Hey liebe Segler, stellt Euch vor in Hamburg regenet es mal nicht.
            Nein, es ist ist sogar schönes Wetter und ordentlich Wind auf der
            Alster. Ihr werdet unruhig in euren Büros oder am Frühstückstisch?
            <p>
              Ihr denkt Euch: "Nix wie Raus auf die Alster Segeln gehen....nur
              Wer hat Zeit? "{' '}
              <p>Diese Frage beantwortet Euch ab jetzt die Prüsse-App.</p>
            </p>
            <p>
              Checkt hier{' '}
              <StyledNavLink exact to="/form">
                ANMELDUNG
              </StyledNavLink>
              in unsere Seglerkartei ein und vernetzt Euch mit Euren
              Segelpartnern.
            </p>
          </p>
        </Wrapper>
      </SectionLayout>
    )
  }
}

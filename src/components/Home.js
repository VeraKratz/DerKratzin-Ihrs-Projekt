import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SectionLayout = styled.section`
  display: block;
  align-items: center;
  grid-row-start: 2;
  overflow-y: scroll;
`

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  /*box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);*/
  padding: 5px 30px;
  position: relative;
  margin: 18px;
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

  h1 {
    font-family: 'Text Me One', sans-serif;
    margin: 0;
  }
`

export default class Home extends Component {
  componentDidMount() {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=3f8028c93104e9273be9df8ec73eb6ac'
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <SectionLayout>
        <Wrapper>
          <h1> AHOI ! </h1>
          <p>
            Hey liebe Segler, stellt Euch vor in Hamburg ist schönes Wetter und
            ordentlich Wind auf der Alster. Ihr werdet unruhig in Euren Büros
            oder am Frühstückstisch?
            <p>
              Ihr denkt Euch: "Nix wie Raus auf die Alster Segeln gehen! Nur Wer
              hat Zeit? "{' '}
            </p>
            <p>Diese Frage beantwortet Euch ab jetzt die Prüsse-App.</p>
            <p>
              Checkt in unsere Seglerkartei ein und vernetzt Euch mit Euren
              Segelpartnern.
              <p>Hier geht`s lang.</p>
              <StyledNavLink exact to="/form">
                ANMELDUNG
              </StyledNavLink>
            </p>
          </p>
        </Wrapper>
      </SectionLayout>
    )
  }
}

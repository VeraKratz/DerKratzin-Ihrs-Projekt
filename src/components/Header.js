import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background: #ebe5e1;
`

const LogoImage = styled.img`
  height: 85px;
`
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4b508c;
`
export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <div />
        <LogoImage src="../../img/logo1.png" />
        <div />
      </Wrapper>
    )
  }
}

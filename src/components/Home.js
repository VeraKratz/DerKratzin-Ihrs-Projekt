import React, { Component } from 'react'
import styled from 'styled-components'

const SectionLayout = styled.section`
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.15);
  padding: 0 40px;
  position: relative;
`

export default class Home extends Component {
  render() {
    return (
      <SectionLayout>
        <Wrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            distinctio magni deleniti eaque at nemo magnam aspernatur aut?
            Natus, quidem? Dolorum officiis cupiditate excepturi doloremque
            officia recusandae vero quo ipsum?
          </p>
        </Wrapper>
      </SectionLayout>
    )
  }
}

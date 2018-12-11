import React, { Component } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'

const StyledCard = styled.div`
  margin: 5px;
  background: white;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border-radius: 4px;
  padding: 20px;
  word-break: break-all;
  display: grid;
  grid-template-columns: 20px 1fr 1fr 20px;
  grid-template-rows: 3fr 1fr 1fr 1fr 3fr 1fr;
  grid-template-areas:
    '. image image  .'
    '.  name name .'
    '. agegenderarea agegenderarea . '
    '. contact contact  .'
    '. about about .'
    '.  delete bookmark  .';
  justify-items: center;

  a {
    text-decoration: none;
  }
`
const UserImage = styled.img`
  grid-area: image;
  width: 100px;
  /* height: 100px; */
  object-fit: cover;
  border-radius: 50%;
`
const NameArea = styled.div`
  grid-area: name;
`
const AboutArea = styled.div`
  grid-area: about;
`
const Contact = styled.div`
  grid-area: contact;
`
const AgeGenderArea = styled.div`
  grid-area: agegenderarea;
`

export default class Card extends Component {
  render() {
    return (
      <StyledCard>
        <UserImage
          src={
            this.props.image ||
            `http://source.unsplash.com/random/600x600?timestamp=${new Date().getTime()}`
          }
          alt="Wie Sie sehen, sehen Sie Nichts!"
        />
        <NameArea>
          <span>{this.props.firstName}</span>
          <span>{this.props.lastName}</span>
        </NameArea>
        <AgeGenderArea>
          <span>{this.props.age}</span>
          <span>{this.props.gender}</span>
        </AgeGenderArea>
        <AboutArea>{this.props.about}</AboutArea>
        <Contact>
          <a href="mailto:{this.props.contact}">{this.props.contact}</a>
        </Contact>
        <Bookmark
          marked={this.props.marked}
          handleOnClick={this.props.handleBookmark}
          gridArea="bookmark"
        />
        <Bookmark
          marked={this.props.marked}
          handleOnClick={this.props.handleDeleteSailor}
        />
      </StyledCard>
    )
  }
}

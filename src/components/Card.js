import React, { Component } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'
const StyledCard = styled.div`
  min-height: 350px;
  margin: 23px;
  background: white;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border-radius: 4px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 10px;
  grid-template-areas:
    'image name'
    '. .'
    'about about'
    'contact .';

  a {
    text-decoration: none;
  }
`

const UserImage = styled.img`
  grid-area: image;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`
const NameArea = styled.div`
  grid-area: name;
  margin-right: auto;
`
const AboutArea = styled.div`
  grid-area: about;
`
const Contact = styled.div`
  grid-area: contact;
`

export default class Card extends Component {
  render() {
    return (
      <StyledCard>
        <Bookmark
          marked={this.props.marked}
          handleOnClick={this.props.handleBookmark}
        />
        <Bookmark
          marked={this.props.marked}
          handleOnClick={this.props.handleDeleteSailor}
        />
        <UserImage src={this.props.image} alt="random" />
        <NameArea>
          <div>{this.props.firstName}</div>
          <div>{this.props.lastName}</div>
        </NameArea>
        <span>{this.props.age}</span>
        <span>{this.props.gender}</span>
        <AboutArea>{this.props.about}</AboutArea>
        <Contact>
          <a href="mailto:{this.props.contact}">{this.props.contact}</a>
        </Contact>
      </StyledCard>
    )
  }
}

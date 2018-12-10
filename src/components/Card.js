import React, { Component } from 'react'
import styled from 'styled-components'
import Bookmark from './Bookmark'

const StyledCard = styled.div`
  min-height: 350px;
  margin: 5px;
  background: white;
  box-shadow: 0 8px 16px rgba(0, 40, 100, 0.4);
  border-radius: 4px;
  padding: 20px;
  display: grid;
  grid-template-columns: 20px 30px auto 30px 20px;
  grid-auto-rows: 25% 30px 30px 25px auto 10%;

  grid-gap: 5px;
  grid-template-areas:
    '. . image . .'
    '. .name. .'
    '. . age gender . . '
    '. . contact . .'
    '. about about about .'
    '. . delete bookmark . .';

  a {
    text-decoration: none;
  }
`
const UserImage = styled.img`
  grid-area: image;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
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
const AgeGenderArea = styled.div`
  grid-area: agegenderarea;
`

export default class Card extends Component {
  render() {
    return (
      <StyledCard>
        <UserImage src={this.props.image} alt="random" />
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
        />
        <Bookmark
          marked={this.props.marked}
          handleOnClick={this.props.handleDeleteSailor}
        />
      </StyledCard>
    )
  }
}

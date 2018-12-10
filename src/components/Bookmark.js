import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

const Heart = styled.div`
  color: grey;
  grid-area: bookmark;
  &.marked {
    color: red;
  }
`

export default class Bookmark extends Component {
  render() {
    return (
      <Heart
        className={this.props.marked ? 'marked' : ''}
        onClick={this.props.handleOnClick}
      >
        <FontAwesomeIcon icon="heart" />
      </Heart>
    )
  }
}
//<Wrapper onClick={this.props.toggleBookmark}>{this.props.img}

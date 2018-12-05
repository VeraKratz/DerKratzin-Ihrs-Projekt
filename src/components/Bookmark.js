import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

const Heart = styled.div`
  color: grey;

  .svg-inline--fa {
    height: 3em;
  }
  .bInlse .svg-inline--fa {
    height: 3em;
  }

  .svg-inline--fa.fa-w-18 {
    width: 3em;
  }
  &.marked {
    color: red;
  }
`
/*const Wrapper = styled.div`
  position: absolute;
  top: -26px;
  right: 3%;
  img {
    height: 31px !important;
    width: 26px !important;
    object-fit: cover;
  }
`*/

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

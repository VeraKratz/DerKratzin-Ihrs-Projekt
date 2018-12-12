import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

const DeleteButton = styled.div`
  color: #3e5aa5;
  grid-area: delete;
`

export default class Delete extends Component {
  render() {
    return (
      <DeleteButton onClick={this.props.handleOnClick}>
        <FontAwesomeIcon icon="trash" />
      </DeleteButton>
    )
  }
}
//<Wrapper onClick={this.props.toggleBookmark}>{this.props.img}

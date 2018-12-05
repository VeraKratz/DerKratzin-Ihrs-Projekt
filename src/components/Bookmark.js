import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const Anchor = styled.div`
  color: grey;
`

export default class Bookmark extends Component {
  render() {
    return (
      <Anchor onClick={this.props.handleOnClick}>
        <FontAwesomeIcon icon="" />
      </Anchor>
    )
  }
}

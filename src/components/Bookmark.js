import React, { Component } from 'react'

export default class Bookmark extends Component {
  render() {
    return <div onClick={this.props.handleOnClick}>{'*'}</div>
  }
}

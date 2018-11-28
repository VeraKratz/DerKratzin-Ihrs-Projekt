import React, { Component } from 'react'

export default class Toolbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <div />
          <div>PÜSSE APP</div>
          <div>
            <ul>
              <li>
                <a href="/">Add Profile</a>
              </li>
              <li>
                <a href="/">See Profiles</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

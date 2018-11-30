import React, { Component } from 'react'
import searchIcon from './search-icon.png'







export default class Menu extends Component {
  render() 
 let linksMarkup = {this.props.links.map(link,index) =>{
   
  return(
    {
    <li className="menu__list-item"><a className="menu__link menu__" href={link}{link.label}</a></li>
          
})


    return (
      <div className="container center">
        <nav className="menu">
          <h1
            style={{ backgroundImage: 'url(' + this.props.logo + ')' }}
            className="menu__logo"
        Prüsse-App
          </h1>

          <div className="menu__right">
            <ul className="menu__list">
              {linksMarkup}
            </ul>

            <button
              style={{ backgroundImage: 'url(' + searchIcon + ')' }}
              className="menu__search-button"
            />

            <form className="menu__search-form hide" method="POST">
              <input
                className="menu__search-input"
                placeholder="Type and hit enter"
              />
            </form>
          </div>
        </nav>
      </div>
    )
  


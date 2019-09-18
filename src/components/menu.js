import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "gatsby-plugin-transition-link"

export default class MenuComp extends Component {
  render() {
    return (
      <div className='navbar navbar-expand-lg navbar-dark'>
          <Container>
          <AniLink
  to="/"
  fade
  duration={1}
>
            <img 
                className="logo"
                src="kavecka_logo.svg" 
                alt="Kavecka Investments"
                height="60px"
                />
            </AniLink>
            <ul className='nav navbar-nav'>

              <li className='nav-item'>
         

              <AniLink
  className = "about-item"
  to="/about"
  fade
  duration={1}
>
About</AniLink>
              </li>
            </ul>
          </Container>
        </div>
    )
  }
}




import React from 'react'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

export default ({ children }) => (
  <div className="bg">
        <Helmet title='Kavecka Investments' />
        <div className='navbar navbar-expand-lg navbar-dark'>
          <Container>
            <Link to='/' className='navbar-brand'>
            <img 
                className="logo"
                src="kavecka_logo.svg" 
                alt="triangle with all three sides equal"
                height="60px"
                />
            </Link>
            <ul className='nav navbar-nav'>

              <li className='nav-item'>
                <Link to='/about' className='nav-link'>About</Link>
              </li>
            </ul>
          </Container>
        </div>
        <div className='pageContent'>{children}</div>
  </div>
) 

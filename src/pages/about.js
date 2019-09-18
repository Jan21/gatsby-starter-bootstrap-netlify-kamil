import React from "react"
import Layout from "../components/layout"
import Helmet from 'react-helmet'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "gatsby-plugin-transition-link"
import MenuComp from '../components/menu'
export default () => (
    <Layout>
      <Helmet title='Kavecka Investments - about' />
      <MenuComp></MenuComp>
      <div className='aboutbox'></div>
    </Layout>
  )


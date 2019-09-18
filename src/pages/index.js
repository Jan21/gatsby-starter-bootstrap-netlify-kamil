import React from 'react'
import Layout from '../components/layout'
import MenuComp from '../components/menu'
import { Container } from 'reactstrap'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "gatsby-plugin-transition-link"
const IndexPage = () =>  (
    <Layout>
      <Helmet title='Kavecka Investments' />
      <MenuComp></MenuComp>
    </Layout>
  )

export default IndexPage


import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Paragraph1 from '../components/Home/paragraph-1'
import List from '../components/Home/list'

const Index = ({ data }) => {
  return (
    <Layout>
      <Hero image={data.image.childImageSharp} />
      <Paragraph1 />
      <List />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    image: file(relativePath: { eq: "novum-labs-head.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

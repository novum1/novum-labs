import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Paragraph1 from '../components/Home/paragraph-1'
import List from '../components/Home/list'
import Coming from '../components/Home/coming-soon'

const Index = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleComing = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Layout>
      <Coming isOpen={isOpen} toggle={toggleComing} />
      <Hero
        image={data.image.childImageSharp}
        toggleComing={toggleComing}
        isOpen={isOpen}
      />
      <Paragraph1 />
      <List />
    </Layout>
  )
}

export default Index

export const query = graphql`
  query {
    image: file(relativePath: { eq: "Novum Labs-08-06.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Paragraph1 from '../components/Home/paragraph-1'
import List from '../components/Home/list'

const Index = () => {
  return (
    <Layout>
      <h1>Index</h1>
      <Hero />
      <Paragraph1 />
      <List />
    </Layout>
  )
}

export default Index

import * as React from 'react'
import Layout from '../pages/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> I'm making this by following the Gatsby tutorial,and this is a children component</p>
     
      <StaticImage 
        alt="A peaceful snake"
        src="../images/ballPython.jpg"
      />
        
    </Layout>
  )
}

export default IndexPage
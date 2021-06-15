import * as React from 'react'
import Layout from '../pages/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> I'm making this by following the Gatsby tutorial,and this is a children component</p>
      <StaticImage
        alt="A beautyful pet!"
        src="https://images.unsplash.com/photo-1572650117973-7d78c3e9aedf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
        <br/> <br/>
      <StaticImage 
        alt="A peaceful snake"
        src="../images/ballPython.jpg"
      />
        
    </Layout>
  )
}

export default IndexPage
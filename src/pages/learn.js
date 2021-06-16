import * as React from 'react'
import Layout from './layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
    paragraphItems,
    logoImage
}
from '../components/learn.module.css'

const LearnPage = () => {
   
    return(
        <Layout pageTitle={"Learning React"}>
            <StaticImage className={logoImage}
                alt="This is React Logo"
                src="../images/react.png"
            />

            <p className={paragraphItems}> Event handler example:</p>

            <form onSubmit={this.handleSubmit}>
                <button type="submit"> Submit</button>
            </form>
        </Layout>
    );
}

export default LearnPage
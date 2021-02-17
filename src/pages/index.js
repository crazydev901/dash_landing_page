import React from "react"
import Header from "../components/Header"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import "../styles/wrapper.css"

import { graphql } from "gatsby"
console.log("index.js")
const Home = ({ data }) => {
  const { allMarkdownRemark } = data
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", allMarkdownRemark)

  return (
    <div className="wrapper">
      <Header />
      {allMarkdownRemark.edges.map(({ node }, key) =>
        node.frontmatter.type == "code" ? (
          <Section1 data={node} key={node.frontmatter.id} />
        ) : (
          <Section2 data={node} key={node.frontmatter.id} />
        )
      )}
    </div>
  )
}

export default Home
export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            id
            title
            type
            beforeCode
            afterCode
          }
        }
      }
    }
  }
`

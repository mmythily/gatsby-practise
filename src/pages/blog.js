import React from 'react'
import { Link, graphql } from 'gatsby'


import Layout from '../components/layout'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query BlogIndexQuery{
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`
export default function blog({data}) {
  return (
    <Layout>
      <SEO title='Blog' description='blog posts'/>
      <h2>Latest Posts</h2>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.path}><h2>{post.node.frontmatter.title}</h2></Link>
          <p>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</p>
          <hr/>
        </div>
      ))}
    </Layout>
  )
}



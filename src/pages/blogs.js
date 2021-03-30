import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../Components/Layout/Layout"
import "../styles/blogs.scss"
import Avatar from "../Components/Avatar/Avatar";

const Blogs = props => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              author
              date
            }
            fields {
              path
            }
          }
        }
      }
    }
  `)

  console.log(allMarkdownRemark)

  return (
    <Layout>
      <div className="blogs">
        <h1 className="blogs-header">Blogs</h1>
        <div className="blog-box">
          {allMarkdownRemark.edges.map(node => {
            console.log(node)
            return (
              <div className="blog-card">
                <Link
                  to={`/blog/${node.node.fields.path}`}
                  className="blog-card-link"
                >
                  <div className="topic">{node.node.frontmatter.title}</div>
                  <div className="author">
                    <div className="user">
                        <Avatar firstName={node.node.frontmatter.author} rightGutter />
                        <h6>{node.node.frontmatter.author}</h6>
                    </div>
                    <div className="time">Date: {node.node.frontmatter.date}</div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

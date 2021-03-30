import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout/Layout"
import "./template.scss"
import Avatar from "../Components/Avatar/Avatar"

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { path: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
      }
      html
    }
  }
`

const BlogTemplate = props => {
  return (
    <Layout>
      <div className="template-body">
        <div className="body-top">
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <div className="body-creator">
            <div className="user">
              <Avatar
                firstName={props.data.markdownRemark.frontmatter.author}
                rightGutter
              />
              <h5>{props.data.markdownRemark.frontmatter.author}</h5>
            </div>
            <div>
              <h6>DATE: {" "}{props.data.markdownRemark.frontmatter.date}</h6>
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
      blog template
    </Layout>
  )
}

export default BlogTemplate

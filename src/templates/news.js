import React from "react"
import DeepLayout from '../components/deeplayout';
import { graphql } from "gatsby"
import './blog.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, fields } = markdownRemark
  return (
    <DeepLayout title={frontmatter.title} subtitle={frontmatter.date + " by " + frontmatter.author} details={fields.readingTime.text} >
      <div className="blog-post-container max-width-container">
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
	</div>
      </div>
    </DeepLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

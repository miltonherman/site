import React from "react"
import DeepLayout from '../components/deeplayout';
import { graphql } from "gatsby"
import './profile.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <DeepLayout>
      <div className="profile-container max-width-container">
        <div className="profile">
          <div><img src={frontmatter.image.publicURL} alt={frontmatter.name}/></div>
	  <div>
	    <h1>{frontmatter.name}</h1>
            <h4>{frontmatter.title}</h4>
            <div
              className="profile-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
	  </div>
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
        name
        image {
          publicURL
        }
      }
    }
  }
`

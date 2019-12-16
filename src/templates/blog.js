import React from "react"
import kebabCase from "lodash/kebabCase";
import DeepLayout from '../components/deeplayout';
import LabelIcon from '@material-ui/icons/Label';
import { graphql, Link } from "gatsby"
import './blog.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, fields } = markdownRemark
  return (
    <DeepLayout title={frontmatter.title} subtitle={frontmatter.date + " by " + frontmatter.author} details={fields.readingTime.text}>
      <div className="blog-post-container max-width-container">
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {frontmatter.tags && 
          <div className={'tag-list'}>
            <LabelIcon />
            {frontmatter.tags.map((tag, i) => (
              <><span>{i > 0 ? ', ':''}</span><Link to={'/blog/tags/' + kebabCase(tag) + '/'}>{tag}</Link></>
            ))}
          </div>
          }
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
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

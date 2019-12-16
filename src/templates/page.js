import React from "react"
import { graphql } from "gatsby"
import Header from '../components/deep/header/header';
import Layout from '../components/layout';
import CommonButton from '../components/common/button/button';
import '../styles/general.scss'
import './page.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Header title={frontmatter.title} subtitle={frontmatter.date} />
      <div className="page-container">
        <div className="page">
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        {frontmatter.ctaref && 
          <div className="page-container__cta">
            <CommonButton color="red-gold" link={frontmatter.ctaref}>{frontmatter.cta}</CommonButton>
          </div>
        }
      </div>
    </Layout>
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
        cta
        ctaref
      }
    }
  }
`

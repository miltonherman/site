import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/deep/header/header';
import Item from '../components/common/contentlist/item';
import List from '../components/common/contentlist/list';
import '../styles/general.scss';

export default function Template({
  pageContext,
  data
}) {
  let entries = data.allMarkdownRemark.edges.map(node => node.node.frontmatter);
  return (
    <Layout>
      <Header title={'Tagged ' + pageContext.tag} />
      <div className={'max-width-container center-content'}>
        <List>
          {entries.map(entry => (<Item entry={entry}/>))}
        </List>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content\\/blog/"}, frontmatter: {draft: {eq: false}, tags: {in: [$tag]}}}
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
	node {
          frontmatter {
            title
            author
            date
            impact
            path
            cta
            tags
          }
        }
      }
    }
  }
`

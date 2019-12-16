import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/deep/header/header';
import Item from '../components/common/contentlist/item';
import List from '../components/common/contentlist/list';
import '../styles/general.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content\\/news/"}, frontmatter: {draft: {eq: false}}}
          sort: {order: DESC, fields: frontmatter___date}
	) {
	  edges {
	    node {
	      frontmatter {
	        title
                date
                author
		impact
		path
		ref
		cta
		refcta
	      }
	    }
	  }
	}
      }
    `}
    render={data=>{
      let entries = data.allMarkdownRemark.edges.map(node => node.node.frontmatter);
      return (
        <Layout>
          <Header title="Latest News" subtitle="Announcements, roadmap updates, and other things that we're excited about sharing!" />
          <div className={'max-width-container center-content'}>
            <List>
              {entries.map(entry => (<Item entry={entry}/>))}
            </List>
          </div>
        </Layout>
      );
    }}
  />
);

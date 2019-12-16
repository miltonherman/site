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
          filter: {fileAbsolutePath: {regex: "/content\\/blog/"}, frontmatter: {draft: {eq: false}}}
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
          <Header title="Latest Articles" subtitle="Words from our team to inspire, assist, or highlight teamwork." />
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

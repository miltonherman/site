import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/deep/header/header';
import Item from '../components/common/contentlist/item';
import List from '../components/common/contentlist/list';
import '../styles/general.scss';
import './press.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content\\/press/"}, frontmatter: {draft: {eq: false}}}
          sort: {order: DESC, fields: frontmatter___date}
	) {
	  edges {
	    node {
              id
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
      let entries = data.allMarkdownRemark.edges.map(node => node.node);
      return (
        <Layout>
          <Header title="Press Releases" subtitle="Material and releases for our friends in the press." />
          <div className={'max-width-container center-content press'}>
            <div className={'press-kit'}>
	      <h2>Press Kit</h2>
              <p>If you&apos;re writing or otherwise reporting about Topple, please consult our <a href='/presskit.zip'>Press&nbsp;Kit</a>.</p>
              <p>Hopefully this makes your job a little easier. If there is any other information or documents that would help please ask.</p></div>
            <List>
              {entries.map(entry => (<Item key={entry.id} author="false" entry={entry.frontmatter}/>))}
            </List>
          </div>
        </Layout>
      );
    }}
  />
);

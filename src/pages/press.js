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
          <Header title="Press Releases" subtitle="Material and releases for our friends in the press." />
          <div className={'max-width-container center-content press'}>
            <div className={'press-kit'}>
	      <h2>Press Kit</h2>
              <p>If you&apos;re writing or otherwise reporting about Topple, please consult our <Link to='presskit.zip'>Press&nbsp;Kit</Link>.</p>
              <p>Hopefully this makes your job a little easier. If there is any other information or documents that would help please ask.</p></div>
            <List>
              {entries.map(entry => (<Item author="false" entry={entry}/>))}
            </List>
          </div>
        </Layout>
      );
    }}
  />
);

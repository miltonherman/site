import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/deep/header/header';
import Footer from '../components/landing/footer/footer';
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
          <Header title="Latest News" subtitle="" />
          <ol>
            {entries.map(entry => (
	      <li><Link to={entry.path}>{entry.title}</Link><br/>{entry.impact}</li>
	    ))}
          </ol>
          <Footer/>
        </Layout>
      );
    }}
  />
);

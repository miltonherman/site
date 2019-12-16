import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Header from '../../components/deep/header/header';
import '../../styles/general.scss';
import './team.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content\\/profile/"}}
          sort: {order: DESC, fields: frontmatter___date}
	) {
	  edges {
	    node {
              html
	      frontmatter {
                name
	        title
                image {
                  publicURL
                }
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
          <Header title="Meet the Team" subtitle="Jeff and Portia founded Topple in 2019." />
          <div className={'max-width-container center-content'}>
            <ul className={'team-list'}>
              {entries.map(entry => (
              <li>
                <div><img src={entry.frontmatter.image.publicURL} alt={entry.frontmatter.name}/></div>
                <div>
                  <h2>{entry.frontmatter.name}</h2>
                  <h4>{entry.frontmatter.title}</h4>
                  <div className={'profile-content'} dangerouslySetInnerHTML={{__html: entry.html}}/>
                </div>
              </li>
              ))}
            </ul>
          </div>
        </Layout>
      );
    }}
  />
);

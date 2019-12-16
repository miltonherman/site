import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Header from '../../components/deep/header/header';
import Tag from '../../components/common/contentlist/tag';
import List from '../../components/common/contentlist/list';
import '../../styles/general.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content\\/blog/"}, frontmatter: {draft: {eq: false}}}
          sort: {order: DESC, fields: frontmatter___date}) {
          group(field: frontmatter___tags) {
            tag: fieldValue
            count: totalCount
          }
        }
      }
    `}
    render={data=>{
      let tags = data.allMarkdownRemark.group;
      return (
        <Layout>
          <Header title="Article Tags" />
          <div className={'max-width-container center-content'}>
            <List>
              {tags.map(tag => (<Tag tag={tag}/>))}
            </List>
          </div>
        </Layout>
      );
    }}
  />
);

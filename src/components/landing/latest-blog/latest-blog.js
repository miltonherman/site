import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import CommonButton from '../../common/button/button';
import './latest-blog.scss';
import '../landing.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content\\/blog/"}, frontmatter: {draft: {eq: false}}},
          limit: 1,
          sort: {order: DESC, fields: frontmatter___date}
        ) {
          edges {
            node {
              frontmatter {
                title
                impact
                path
                date
                cta
              }
            }
          }
        }
      }
    `}
    render={data=>{
      let entries = data.allMarkdownRemark.edges.map(node => node.node.frontmatter);
      if (entries.length <= 0) {
        return "";
      }
      return (
        <div className={'max-width-container center-content latest-blog'}>
          {entries.map(entry => (
            <div className={'latest-blog__row'}>
              <div className={'latest-blog__title text-center landing__title mb-3'}>
                {entry.title}
              </div>
             <div className={'latest-blog__button'}>
                <CommonButton color="yellow" link={entry.path}>
                  {entry.cta}
                </CommonButton>
              </div>
            </div>
          ))}
        </div>
      );
    }}
  />
);

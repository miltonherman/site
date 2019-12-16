import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import CommonButton from '../../common/button/button';
import './latest-news.scss';
import '../landing.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content\\/news/"}, frontmatter: {draft: {eq: false}}},
          limit: 1,
          sort: {order: DESC, fields: frontmatter___date}
        ) {
          edges {
            node {
              frontmatter {
                title
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
      if (entries.length <= 0) {
        return "";
      }
      return (
        <div className={'max-width-container center-content latest-news'}>
          {entries.map(entry => (
            <div className={'latest-news__row'}>
              <div className={'latest-news__title text-center landing__title mb-3'}>
                {entry.title}
              </div>
              <div className={'landing__description text-center mb-3'}>
                {entry.impact}
              </div>
              <div className={'latest-news__button'}>
                <CommonButton color="yellow" link={entry.path}>
                 {entry.cta}
                </CommonButton>
		{entry.ref &&
		  <CommonButton color="red-gold" link={entry.ref}>{entry.refcta}</CommonButton>
		}
              </div>
            </div>
          ))}
        </div>
      );
    }}
  />
);

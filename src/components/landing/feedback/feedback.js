import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './feedback.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {regex: "/content\\/feedback/"}}
          sort: { fields: [frontmatter___date], order: DESC }
	) {
          edges {
            node {
              frontmatter {
                author
                date
                role
                title
              }
              html
            }
          }
        }
      }
    `}
    render={data => {
      let feedbacks = data.allMarkdownRemark.edges.map(feedback => feedback.node);
      let i = 0;
      return (
        <Carousel controls={false} interval={null}>
          {feedbacks.map(feedback => (
            <Carousel.Item key={i++}>
              <div className={'feedback-wrapper'}>
                <div className={'feedback__name-block-tablet headline dark'}>
                  <div className={'headline dark'}>{feedback.frontmatter.author}</div>
                  <div className={'subheadline-sm dark'}>{feedback.frontmatter.role}</div>
                </div>
                <div className={'max-width-container feedback'}>
                  <div className={'feedback__photo-block'}>
                    <img src="/ic_chat.svg" className={'chat-icon'} />
                  </div>
                  <div className={'feedback__text-wrapper'}>
                    <div className={'feedback__person-name headline dark'}>
                      {feedback.frontmatter.author}
                    </div>
                    <div className={'feedback__person-title subheadline-sm dark'}>
                      {feedback.frontmatter.role}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: feedback.html }}
                      className={'feedback__text-content subheadline dark'}
                    ></div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    }}
  />
);

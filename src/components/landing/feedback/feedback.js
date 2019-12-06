import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './feedback.scss';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allMarkdownRemark {
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
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={feedbacks.length}
        >
          <Slider>
            {feedbacks.map(feedback => (
              <Slide key={i++} index={i++}>
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
              </Slide>
            ))}
          </Slider>
          {/* <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
      );
    }}
  />
);

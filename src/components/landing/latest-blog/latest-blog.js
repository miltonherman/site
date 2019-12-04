import React from 'react';
import LandingButton from '../button/button';
import './latest-blog.scss';

class LatestBlog extends React.Component {
  render() {
    return (
      <div className={'max-width-container center-content latest-blog'}>
        <div className={'latest-blog__row my-4'}>
          <div className={'latest-blog__title mb-3'}>Latest Roadmap Headline</div>
          <div className={'latest-blog__description mb-3'}>
            This is an impact statement. Something a little bit longer. Maybe mention the specific
            pain point addressed.
          </div>
          <div className={'latest-blog__button'}>
            <LandingButton color="yellow">Get the details</LandingButton>
          </div>
        </div>
        <div className={'latest-blog__row my-4'}>
          <div className={'latest-blog__title mb-3'}>Latest Blog Headline</div>
          <div className={'latest-blog__button mb-3'}>
            <LandingButton color="yellow">Read more</LandingButton>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestBlog;
import React from 'react';
import './feedback.scss';

class Feedback extends React.Component {
  render() {
    return (
      <div className={'feedback-wrapper'}>
        <div className={'feedback__name-block-tablet headline dark'}>
          <div className={'headline dark'}>Lukas Ruebbelke</div>
          <div className={'subheadline-sm dark'}>Founder, Engineer, and Manager at VenturePlex</div>
        </div>
        <div className={'max-width-container feedback'}>
          <div className={'feedback__photo-block'}>
            <img src="/ic_chat.svg" className={'chat-icon'} />
          </div>
          <div className={'feedback__text-wrapper'}>
            <div className={'feedback__person-name headline dark'}>Lukas Ruebbelke</div>
            <div className={'feedback__person-title subheadline-sm dark'}>
              Founder, Engineer, and Manager at VenturePlex
            </div>
            <div className={'feedback__text-content subheadline dark'}>
              Topple provided us with the tools and platform to create high-fidelity feedback loops
              that gently forced us into communicating what was working and, more importantly, what
              was not. In three quarters, we went from being massively in debt, to over a million
              dollars in revenue as we adopted Topple principles and tooling. In the next five
              years, you are going to start to see forward-thinking companies emerge with
              gazelle-like speed from the lumbering, status quo herd, and Topple will be the
              separating factor.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;

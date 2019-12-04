import React from 'react';
import './create-knowledge.scss';

class CreateKnowledge extends React.Component {
  render() {
    return (
      <div className={'knowledge-wrapper'}>
        <div className={'max-width-container knowledge'}>
          <div className={'knowledge__text-wrapper'}>
            <div className={'knowledge__text-header headline'}>
              Create knowledge not excuses. <br />
              Expect success with Topple.
            </div>
            <div className={'knowledge__text-subheader subheadline'}>
              Topple provides tools that help teams create and use documents to communicate,
              remember, and thrive.
            </div>
          </div>
          <div className={'knowledge__buttons-wrapper'}>
            <button className={'landing-button landing-button--red'}>Build a Team</button>
            <button className={'landing-button landing-button--yellow'}>Learn the Tools</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateKnowledge;

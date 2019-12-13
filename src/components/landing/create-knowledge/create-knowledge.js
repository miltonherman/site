import React from 'react';
import CommonButton from '../../common/button/button';
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
            <CommonButton color="red-gold">Build a Team</CommonButton>
            <CommonButton color="yellow">Learn the Tools</CommonButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateKnowledge;

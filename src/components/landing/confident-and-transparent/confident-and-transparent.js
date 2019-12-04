import React from 'react';
import '../landing.scss';
import './confident-and-transparent.scss';

class ConfidentAndTransparent extends React.Component {
  render() {
    return (
      <div className={'max-width-container center-content confident'}>
        <div className={'confident__top'}>
          <div className={'landing__title text-center'}>Confident and Transparent</div>
          <div className={'landing__description-sm text-center mb-4 my-2'}>
            Know that you’re doing the right thing for your customer, business, team, and career.
          </div>
        </div>
        <div className={'confident__body'}>
          <div className={'confident__left'}>
            <img alt="" src="/grey-screen.svg" className={'confident__image'} />
          </div>
          <div className={'confident__right'}>
            <div className={'confident__row'}>
              <div className={'confident__icon mr-3'}></div>
              <div className={'landing__description'}>
                Stop watching your braintrust walk out the door.
              </div>
            </div>
            <div className={'confident__row'}>
              <div className={'confident__icon mr-3'}></div>
              <div className={'landing__description'}>
                Understand what you need from each other  and what you’re responsible for.
              </div>
            </div>
            <div className={'confident__row'}>
              <div className={'confident__icon mr-3'}></div>
              <div className={'landing__description'}>
                Write what people need to read and what you’ll wish you could remember.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfidentAndTransparent;

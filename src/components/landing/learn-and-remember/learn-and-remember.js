import React from 'react';
import './learn-and-remember.scss';
import '../landing.scss';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ChatIcon from '@material-ui/icons/Chat';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
class LearnAndRemember extends React.Component {
  render() {
    return (
      <div className={'max-width-container center-content learn-and-remember'}>
        <div className={'learn-and-remember__top'}>
          <div className={'landing__title text-center'}>Learn and Remember</div>
          <div className={'landing__description-sm text-center mb-4 my-2'}>
            Stop repeating mistakes. Repeat success.
          </div>
        </div>
        <div className={'learn-and-remember__bottom'}>
          <div className={'learn-and-remember__column'}>
            <div className={'learn-and-remember__icon mr-3'}>
              <EmojiObjectsIcon
                style={{ color: '#DF4F2B', fontSize: 50 }}
                className={'mb-2'}
              ></EmojiObjectsIcon>
            </div>
            <div className={'landing__description text-center'}>
              Discover unknown-unknowns and close knowledge gaps.
            </div>
          </div>
          <div className={'learn-and-remember__column'}>
            <div className={'learn-and-remember__icon mr-3'}>
              <ChatIcon style={{ color: '#DF4F2B', fontSize: 50 }} className={'mb-2'}></ChatIcon>
            </div>
            <div className={'landing__description text-center'}>
              Stop playing the telephone game. Share real information and feedback.
            </div>
          </div>
          <div className={'learn-and-remember__column'}>
            <div className={'learn-and-remember__icon mr-3'}>
              <TrendingUpIcon
                style={{ color: '#DF4F2B', fontSize: 50 }}
                className={'mb-2'}
              ></TrendingUpIcon>
            </div>
            <div className={'landing__description text-center'}>
              Build actionable histories and adapt to changing context.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnAndRemember;

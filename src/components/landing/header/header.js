import React from 'react';
import './header.scss';
import '../landing.scss';
import CommonButton from '../../common/button/button';

class Header extends React.Component {
  render() {
    return (
      <div className={'header-wrapper'}>
        <div className={'max-width-container center-content header'}>
          <div className={'header__left'}>
            <img alt="" src="/topple-logo-white.svg" className={'header__logo'} />

            <div className={'header__title'}>
              You'll feel like you are <br />
              working together <br />
              for the first time.
            </div>
            <div className={'header__description'}>
              Topple believes in teamwork.
              <br />
              That people achieve greatness by playing a part on a great team.
              <br />
              Our part is to help you build those teams with great software.
            </div>
            <div className={'header__buttons'}>
              <div className={'header__button'}>
                <CommonButton color="red">Build a Team</CommonButton>
              </div>
              <div className={'header__button'}>
                <CommonButton color="blue">Learn the Difference</CommonButton>
              </div>
            </div>
          </div>
          <div className={'header__right'}>
            <img alt="" src="/rectangle-white.svg" className={'header__image'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

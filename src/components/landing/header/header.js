import React from 'react';
import './header.scss';
import '../landing.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={'header-wrapper'}>
        <div className={'max-width-container header'}>
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
          </div>
          <div className={'header__right'}></div>
        </div>
      </div>
    );
  }
}

export default Header;

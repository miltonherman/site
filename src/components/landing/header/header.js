import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import './header.scss';
import '../landing.scss';
import CommonChip from '../../common/chip/chip';
import CommonButton from '../../common/button/button';

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                menuLinks  {
                  link
                  name
                  children {
                    name
                    link
                  }
                }
              }
            }
          }
        `}
        render={data => {
          let entries = data.site.siteMetadata.menuLinks.map(node => node);
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
                    Topple believes in teamwork.<br />
                    That people achieve greatness by playing a part on a great team.<br />
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
/*
            <div className={'header-wrapper'}>
              <div className={'max-width-container center-content header'}>
                <div className={'header__left'}>
                  <Link to="/"><img alt="" src="/red-blue@2x.png" className={'deepheader__logo'} /></Link>
                </div>
                <div className={'deepheader__right'}>
                  {entries.map(entry => (
                    <Link to={entry.link}>{entry.name}</Link>
                  ))}
                  <CommonChip color="red-gold" link="/login">Login</CommonChip>  
                </div>
              </div>
              <div className={'max-width-container center-content deepheader-hero'}>
                <div className={'deepheader-hero__container'}>
                  <h1>{title}</h1>
                  <h4>{subtitle}</h4>
                </div>
              </div>
            </div>
*/
          );
        }}
      />
    );
  }
}

export default Header;

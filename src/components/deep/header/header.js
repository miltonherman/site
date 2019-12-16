import React from 'react';
import './header.scss';
import { Link, StaticQuery, graphql } from 'gatsby';
import CommonChip from '../../common/chip/chip';

class Header extends React.Component {
  render() {
    const { title, subtitle, details } = this.props;
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
            <div className={'deepheader-wrapper'}>
              <div className={'max-width-container center-content deepheader'}>
                <div className={'deepheader__left'}>
                  <Link to="/"><img alt="" src="/red-blue@2x.png" className={'deepheader__logo'} /></Link>
                </div>
                <div className={'deepheader__right'}>
                  {entries.map(entry => (
                    <Link key={entry.name} to={entry.link}>{entry.name}</Link>
                  ))}
                  <CommonChip color="red-gold" link="/login">Login</CommonChip>  
                </div>
              </div>
              <div className={'max-width-container center-content deepheader-hero'}>
                <div className={'deepheader-hero__container'}>
                  <h1>{title}</h1>
		  {subtitle && 
                  <h4>{subtitle}</h4>
                  }
		  {details &&
                  <h5>{details}</h5>
                  }
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default Header;

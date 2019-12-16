import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import './footer.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            footerLinks {
              company {
                name
                ref
              }
              resources {
                name
                ref
              }
            }
          }
        }
      }
    `}
    render={data=>{
      return (
        <div className={'footer-wrapper'}>
          <div className={'max-width-container footer'}>
            <div className={'footer__nav-wrapper'}>
              <div className={'footer__nav'}>
                <div className={'footer__nav-list-title subheadline dark'}>Company</div>
                <ul className={'footer__nav-list'}>
                  {data.site.siteMetadata.footerLinks.company.map(entry => (
                    <li key={entry.ref} className={'footer__nav-item subheadline-sm dark underline clickable'}>
                      <Link to={entry.ref}>{entry.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'footer__nav'}>
                <div className={'footer__nav-list-title subheadline dark'}>Resources</div>
                <ul className={'footer__nav-list'}>
                  {data.site.siteMetadata.footerLinks.resources.map(entry => (
                    <li key={entry.ref} className={'footer__nav-item subheadline-sm dark underline clickable'}>
                      <Link to={entry.ref}>{entry.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={'footer__image-wrapper'}>
              <img alt="" src="/transform-upright.png" className={'footer__logo'} />
            </div>
          </div>
        </div>
      );
    }}
  />
);

import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className={'footer-wrapper'}>
        <div className={'max-width-container footer'}>
          <div className={'footer__nav-wrapper'}>
            <div className={'footer__nav'}>
              <div className={'footer__nav-list-title subheadline dark'}>Company</div>
              <ul className={'footer__nav-list'}>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Product (Product Page)</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>About and Roadmap</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Pricing</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Team and Careers</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Privacy</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div className={'footer__nav'}>
              <div className={'footer__nav-list-title subheadline dark'}>Resources</div>
              <ul className={'footer__nav-list'}>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Blog</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>API Docs</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Long-form Manifesto</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Open Source Software</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Open Source Companies</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Brain Drain Calculator</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a>Press</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={'footer__image-wrapper'}>
            <img src="/transform-upright.png" className={'footer__logo'} />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

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
                  <a href="">Product (Product Page)</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">About and Roadmap</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Pricing</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Team and Careers</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Privacy</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className={'footer__nav'}>
              <div className={'footer__nav-list-title subheadline dark'}>Resources</div>
              <ul className={'footer__nav-list'}>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Blog</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">API Docs</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Long-form Manifesto</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Open Source Software</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Open Source Companies</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Brain Drain Calculator</a>
                </li>
                <li className={'footer__nav-item subheadline-sm dark underline clickable'}>
                  <a href="">Press</a>
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

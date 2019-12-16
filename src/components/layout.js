import React from 'react';
import Footer from './landing/footer/footer';
import './layout.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={'layout'}>
        <div className={'site'}>
          {children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;

import React from 'react';
import Footer from './landing/footer/footer';
import Header from './deep/header/header';
import './deeplayout.scss';

class DeepLayout extends React.Component {
  render() {
    const { children, title, subtitle, details } = this.props;
    return (
      <div className={'deeplayout'}>
        <div className={'site'}>
          <Header title={title} subtitle={subtitle} details={details} />
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default DeepLayout;

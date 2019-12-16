import React from 'react';
import './spotlight.scss';

class Spotlight extends React.Component {
  render() {
    const { children } = this.props;
    const { src } = this.props;
    return (
      <div className={'spotlight'} style={{backgroundImage: 'url(' + src + ')'}}>{children}</div>
    );
  }
}

export default Spotlight;

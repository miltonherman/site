import React from 'react';
import './latest.scss'

class Latest extends React.Component {
  render() {
    const { children } = this.props;
    return <div className={'latest-wrapper'}>{children}</div>;
  }
}

export default Latest;

import React from 'react';
import Header from './deep/header/header';

class DeepLayout extends React.Component {
  render() {
    const { children, title, subtitle } = this.props;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        {children}
      </div>
    );
  }
}

export default DeepLayout;

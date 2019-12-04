import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div
        style={{
          maxWidth: '1200px'
        }}
      >
        {children}
      </div>
    );
  }
}

export default Layout;

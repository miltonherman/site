import React from 'react';
import './list.scss';

class List extends React.Component {
  render() {
    let {children} = this.props
    return (
      <ol className={'common-list'}>
        {children}
      </ol>
    );
  }
}

export default List;

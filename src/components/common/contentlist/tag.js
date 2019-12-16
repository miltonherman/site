import React from 'react';
import kebabCase from "lodash/kebabCase"
import './tag.scss';

class Tag extends React.Component {
  render() {
    const { tag } = this.props;
    const path = '/blog/tags/' + kebabCase(tag.tag) + '/';
    function handleClick(e) {
      e.preventDefault();
      if (path)
        window.location.href=path;
    }
    return (
      <li className={'common-tag'} key={tag.tag} onClick={handleClick}>
        <h3>{tag.count}</h3>
        <h3>{tag.tag}</h3>
      </li>
    );
  }
}

export default Tag;

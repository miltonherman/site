import React from 'react';
import './button.scss';
class CommonButton extends React.Component {
  render() {
    const { children } = this.props;
    const { color } = this.props;
    const { link } = this.props;
    let buttonClass = 'common-button ';
    switch (color) {
      case 'red-gold':
        buttonClass += 'common-button--red-gold';
        break;
      case 'blue':
        buttonClass += 'common-button--blue';
        break;
      case 'yellow':
        buttonClass += 'common-button--yellow';
        break;
      case 'red':
      default:
        buttonClass += 'common-button--red';
        break;
    }
    function handleClick(e) {
      e.preventDefault();
      if (link)
        window.location.href=link;
    }
    return <button onClick={handleClick} className={buttonClass}>{children}</button>;
  }
}

export default CommonButton;

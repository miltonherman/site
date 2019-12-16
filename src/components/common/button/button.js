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
      case 'blue-clear':
        buttonClass += 'common-button--blue--clear';
        break;
      case 'yellow-clear':
        buttonClass += 'common-button--yellow--clear';
        break;
      case 'red-clear':
        buttonClass += 'common-button--red--clear';
        break;
      case 'white-clear':
        buttonClass += 'common-button--white--clear';
        break;
      case 'black-clear':
        buttonClass += 'common-button--black--clear';
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

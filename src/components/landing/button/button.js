import React from 'react';
import './button.scss';
class LandingButton extends React.Component {
  render() {
    const { children } = this.props;
    const { color } = this.props;
    let buttonClass = 'landing-button ';
    switch (color) {
      case 'blue':
        buttonClass += 'landing-button--blue';
        break;
      case 'yellow':
        buttonClass += 'landing-button--yellow';
        break;
      case 'red':
        buttonClass += 'landing-button--red';
        break;
    }
    return <button className={buttonClass}>{children}</button>;
  }
}

export default LandingButton;

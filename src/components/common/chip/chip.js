import React from 'react';
import './chip.scss';
class CommonChip extends React.Component {
  render() {
    const { children } = this.props;
    const { color } = this.props;
    const { link } = this.props;
    let chipClass = 'common-chip ';
    switch (color) {
      case 'red-gold':
        chipClass += 'common-chip--red-gold';
        break;
      case 'blue':
        chipClass += 'common-chip--blue';
        break;
      case 'yellow':
        chipClass += 'common-chip--yellow';
        break;
      case 'red-clear':
        chipClass += 'common-chip--red--clear';
        break;
      case 'blue-clear':
        chipClass += 'common-chip--blue--clear';
        break;
      case 'yellow-clear':
        chipClass += 'common-chip--yellow--clear';
        break;
      case 'red-clear':
        chipClass += 'common-chip--red--clear';
        break;
      case 'white-clear':
        chipClass += 'common-chip--white--clear';
        break;
      case 'black-clear':
        chipClass += 'common-chip--black--clear';
        break;
      case 'red':
      default:
        chipClass += 'common-chip--red';
        break;
    }
    function handleClick(e) {
      e.preventDefault();
      if (link)
        window.location.href=link;
    }
    return <button onClick={handleClick} className={chipClass}>{children}</button>;
  }
}

export default CommonChip;

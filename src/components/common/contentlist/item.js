import React from 'react';
import * as moment from 'moment';
import './item.scss';

class Item extends React.Component {
  render() {
    const { entry, author } = this.props;
    function handleClick(e) {
      e.preventDefault();
      if (entry.path)
        window.location.href=entry.path;
    }
    const date = moment(entry.date, 'YYYY-MM-DD');
    return (
      <li className={'common-item'} key={entry.title} onClick={handleClick}>
        <div className={'common-item__date'}><span className={'common-item__date-date'}>{date.format('DD')}</span><span className={'common-item__date-month'}>{date.format('MMM')}</span></div>
        <div>
          <h3>{entry.title}</h3>
          {entry.impact}
        </div>
        { author != "false" &&
        <div className={'common-item__author'}>by {entry.author}</div>
        }
      </li>
    );
  }
}

export default Item;

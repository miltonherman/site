import React from 'react';
import './focus-and-scale.scss';
import '../landing.scss';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import ImportExport from '@material-ui/icons/ImportExport';
import LibraryBooks from '@material-ui/icons/LibraryBooks';

class FocusAndScale extends React.Component {
  render() {
    return (
      <div className={'max-width-container center-content focus-and-scale'}>
        <div className={'focus-and-scale__left'}>
          <div className={'landing__title'}>Focus and Scale</div>
          <div className={'landing__description-sm mb-4'}>
            Accomplish more with a team, not in spite of it.
          </div>
          <img alt="" src="/grey-screen.svg" className={'focus-and-scale__image'} />
        </div>
        <div className={'focus-and-scale__right'}>
          <div className={'focus-and-scale__row'}>
            <div className={'focus-and-scale__icon mr-3'}>
              <DirectionsRun className={'landing__mat-icon'}></DirectionsRun>
            </div>
            <div className={'landing__description'}>
              Stop watching your braintrust walk out the door.
            </div>
          </div>
          <div className={'focus-and-scale__row'}>
            <div className={'focus-and-scale__icon mr-3'}>
              <ImportExport className={'landing__mat-icon'}></ImportExport>
            </div>
            <div className={'landing__description'}>
              Understand what you need from each other and what you’re responsible for.
            </div>
          </div>
          <div className={'focus-and-scale__row'}>
            <div className={'focus-and-scale__icon mr-3'}>
              <LibraryBooks className={'landing__mat-icon'}></LibraryBooks>
            </div>
            <div className={'landing__description'}>Repeatable work for hands-off growth.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FocusAndScale;

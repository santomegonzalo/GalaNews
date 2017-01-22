// @flow
import React, { Component } from 'react';
import styles from './actions.css';
import Button from './utils/Button';

class SourcesActions extends Component {
  render() {
    return (
      <div className={styles.sourcesActions}>
        <div className={styles.sourcesActionsFilters}>

        </div>
        <div className={styles.sourcesActionsButtons}>
          <Button
            disabled={countSelected === 0}
            text="Next"
            onClick={() => this.handleNext()}
          />
        </div>
      </div>
    );
  }
}

export default SourcesActions;

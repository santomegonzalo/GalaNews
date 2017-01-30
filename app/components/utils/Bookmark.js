import React, { Component } from 'react';
import styles from './Bookmark.css';
import classNames from 'classnames';

class Bookmark extends Component {
  render() {
    const clazzCenter = classNames({
      [styles.center]: true,
      selected: this.props.selected,
    });

    const clazzRight = classNames({
      [styles.triangleRight]: true,
      selected: this.props.selected,
    });

    const clazzLeft = classNames({
      [styles.triangleLeft]: true,
      selected: this.props.selected,
    });

    return (
      <div className={styles.bookmark}>
        <div className={styles.center}></div>
        <div className={clazzRight}></div>
        <div className={clazzLeft}></div>
      </div>
    );
  }
}

export default Bookmark;

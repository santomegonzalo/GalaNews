// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Menu.css';
import Button from './utils/Button';

export default class Menu extends Component {
  props: {
    visible: () => void,
    changeMenuVisible: () => void,
  };

  handleClose() {
    const { changeMenuVisible } = this.props;

    changeMenuVisible();
  }

  render() {
    const { visible } = this.props;

    if(!visible) {
      return <div></div>;
    }

    return (
      <div className={styles.container} onClick={() => this.handleClose()}>
        <div className={styles.containerMenu}>
          <div className={styles.closeAction}>
            <Button nostyle onClick={() => this.handleClose()}>
              <i className="material-icons">clear</i>
            </Button>
          </div>
          <div className={styles.menuActions}>
            <Link to="later" className={styles.action}>Save for Later</Link>
            <Link to="sources" className={styles.action} onClick={() => this.handleClose}>Sources</Link>
          </div>
          <div className={styles.userActions}>
          </div>
        </div>
      </div>
    );
  }
}

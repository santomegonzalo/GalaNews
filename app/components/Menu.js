// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import styles from './Menu.css';
import Button from './utils/Button';

export default class Menu extends Component {
  props: {
    visible: () => boolean,
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

    const clazzIcon = classNames({
      'material-icons': true,
      [styles.md42]: true
    });

    return (
      <div className={styles.container}>
        <div className={styles.containerEmpty} onClick={() => this.handleClose()}>
        </div>
        <div className={styles.containerMenu}>
          <div className={styles.closeAction}>
            <Button nostyle onClick={() => this.handleClose()}>
              <i className={clazzIcon}>clear</i>
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

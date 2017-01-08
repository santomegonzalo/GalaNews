import React, { Component } from 'react';
import styles from './Button.css';
import classNames from 'classnames';

class Button extends Component {
  render() {
    const { text, disabled, onClick } = this.props;
    const clazz = classNames({
      [styles.button]: true,
      [styles.disabled]: disabled
    });

    return (
      <button
        className={clazz}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;

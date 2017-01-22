import React, { Component } from 'react';
import styles from './Button.css';
import classNames from 'classnames';

class Button extends Component {
  render() {
    const { text, disabled, onClick, children, nostyle } = this.props;
    const clazz = classNames({
      [styles.button]: true,
      [styles.nostyle]: nostyle,
      [styles.disabled]: disabled
    });

    const internal = text === undefined ? children : text;

    return (
      <button
        className={clazz}
        onClick={onClick}
      >
        {internal}
      </button>
    );
  }
}

export default Button;

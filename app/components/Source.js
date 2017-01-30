
import React, { Component } from 'react';
import styles from './Source.css';
import classNames from 'classnames';

class Source extends Component {
  props: {
    selected: false,
  };

  handleSelect() {
    const { id, selected, selectSource } = this.props;

    selectSource(id, !selected);
  }

  render() {
    const { id, category, description, name, url, urlsToLogos, selected } = this.props;
    const { sourceSelected, source } = styles;

    const clazz = classNames({
      [source]: true,
      [sourceSelected]: selected,
    });

    return (
      <div className={clazz} onClick={() => this.handleSelect()}>
        <div className={styles.imageContainer}>
          <div className={styles.image} style={{
            backgroundImage: `url('${urlsToLogos.medium}')`
          }}>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.infoTitle}>{name}</h3>
        </div>
      </div>
    );
  }
}

export default Source;

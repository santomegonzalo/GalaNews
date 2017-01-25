// @flow
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from './Sources.css';
import Source from './Source';
import Button from './utils/Button';
import { hashHistory } from 'react-router';

class Sources extends Component {
  props: {
    changeMenuVisible: () => void,
    loadSources: () => void,
    sources: () => void,
    selectSource: () => void,
    saveSources: () => Promise,
    menuVisible: () => boolean,
  };

  componentDidMount() {
    document.getElementById('root').classList.remove('with-background');

    const { loadSources, changeMenuVisible } = this.props;

    loadSources();

    if (this.props.menuVisible) {
      changeMenuVisible();
    }
  }

  handleNext() {
    const { saveSources } = this.props;

    saveSources()
      .then(() => {
        hashHistory.push('/articles');
      });
  }

  render() {
    const { sources, selectSource } = this.props;

    if (!sources.list || sources.init) {
      return <div>initializing everything...</div>;
    }

    const countSelected = sources.list.count(source => source.get('selected'));

    return (
      <div className={styles.sources}>
        <div className={styles.sourcesActions}>
          <Button
            disabled={countSelected === 0}
            text="Next"
            onClick={() => this.handleNext()}
          />
        </div>
        <div className={styles.sourcesContainer}>
          {
            sources.loading &&
              <div className={styles.sourcesLoading}>loading...</div>
          }
          {
            sources.list.map((source) => <Source key={source.get('url')} {...source.toJSON()} selectSource={selectSource}/>)
          }
        </div>
      </div>
    );
  }
}

export default Sources;

// @flow
import React, { Component } from 'react';
import { Titlebar } from 'react-titlebar-osx';
import styles from './Articles.css';
import Article from './Article';

import 'react-titlebar-osx/lib/css/Titlebar.css';

class Articles extends Component {
  constructor() {
    super();

    this.state = {
      height: 100,
    };
  }

  componentDidMount() {
    const { loadArticles } = this.props;

    window.addEventListener('resize', () => {
      this.resize();
    }, true);

    loadArticles();
  }

  props: {
    loadArticles: () => void,
    articles: () => void,
  };

  resize() {

  }

  render() {
    const { articles } = this.props;

    if (articles.loading) {
      return <div>loading...</div>;
    }

    if (articles.init) {
      return <div>initializing everything...</div>;
    }

    return (
      <div>
        <div>
          <Titlebar draggable/>
        </div>
        <div className={styles.articlesContainer}>
          {
            articles.list.map((article) => <Article key={article.url} {...article} />)
          }
        </div>
      </div>
    );
  }
}

export default Articles;

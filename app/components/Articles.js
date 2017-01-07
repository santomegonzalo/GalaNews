// @flow
import React, { Component } from 'react';
import styles from './Articles.css';
import Article from './Article';

import 'react-titlebar-osx/lib/css/Titlebar.css';

class Articles extends Component {
  props: {
    loadArticles: () => void,
    articles: () => void,
  };

  constructor() {
    super();

    this.state = {
      height: 100,
      page: 1,
    };
  }

  componentDidMount() {
    const { loadArticles } = this.props;

    window.addEventListener('resize', () => {
      this.resize();
    }, true);

    loadArticles(this.state.page);
  }

  handleScroll(e: any) {
    var container = e.target;

		if (container.scrollTop > 0 && container.scrollTop + container.clientHeight == container.scrollHeight) {
      const { loadArticles } = this.props;
      const newPage = this.state.page + 1;

      this.setState({
        page: newPage
      });

      loadArticles(newPage);
		}
  }

  render() {
    const { articles } = this.props;

    if (!articles.list || articles.init) {
      return <div>initializing everything...</div>;
    }

    return (
      <div className={styles.articlesContainer} onScroll={(e) => this.handleScroll(e)} >
        {
          articles.loading &&
            <div className={styles.articlesLoading}>loading...</div>
        }
        {
          articles.list.map((article) => <Article key={article.url} {...article} />)
        }
      </div>
    );
  }
}

export default Articles;

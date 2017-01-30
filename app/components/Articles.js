// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Articles.css';
import Article from './Article';
import Button from './utils/Button';

import 'react-titlebar-osx/lib/css/Titlebar.css';

class Articles extends Component {
  props: {
    changeMenuVisible: () => void,
    loadArticles: () => void,
    articles: () => void,
    menuVisible: () => boolean,
  };

  componentDidMount() {
    document.getElementById('root').classList.add('with-background');

    const { loadArticles, changeMenuVisible } = this.props;

    loadArticles();

    if (this.props.menuVisible) {
      changeMenuVisible();
    }
  }

  handleScroll(e: any) {
    // var container = e.target;
    //
		// if (container.scrollTop > 0 && container.scrollTop + container.clientHeight == container.scrollHeight) {
    //   const { loadArticles } = this.props;
    //   const newPage = this.state.page + 1;
    //
    //   this.setState({
    //     page: newPage
    //   });
    //
    //   loadArticles(newPage);
		// }
  }

  handleChangeMenu() {
    const { changeMenuVisible } = this.props;

    changeMenuVisible();
  }

  render() {
    const { articles } = this.props;

    if (!articles.list || articles.init) {
      return <div>initializing everything...</div>;
    }

    const clazzIcon = classNames({
      'material-icons': true,
      [styles.md42]: true,
      [styles.hidden]: this.props.menuVisible
    });

    return (
      <div className={styles.container}>
        <div className={styles.actionsContainer}>
          <div className={styles.actionsTitle}>
            Welcome, see here the latest news
          </div>
          <div className={styles.actionsSplit}></div>
          <div className={styles.actionsMenu}>
            <Button nostyle onClick={() => this.handleChangeMenu()}>
              <i className={clazzIcon}>more_vert</i>
            </Button>
          </div>
        </div>
        <div className={styles.articlesContainer} onScroll={(e) => this.handleScroll(e)} >
          {
            articles.loading &&
              <div className={styles.articlesLoading}>loading...</div>
          }
          {
            articles.list.map((article) => <Article key={article.get('url') + article.get('createdAt')} {...article.toJSON()} />)
          }
        </div>
      </div>
    );
  }
}

export default Articles;

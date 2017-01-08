// @flow
import React, { Component } from 'react';
import moment from 'moment';
import { shell } from 'electron';
import styles from './Article.css';

class Article extends Component {
  open() {
    const { author, description, title, url, urlToImage, publishedAt } = this.props;

    shell.openExternal(url)
  }

  render() {
    const { author, description, title, urlToImage, publishedAt } = this.props;

    return (
      <div className={styles.article} onClick={() => this.open()}>
        <div className={styles.imageContainer}>
          <img src={urlToImage} className={styles.image}/>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.infoTitle}>{title} <span className={styles.infoAgo}>({moment(publishedAt).fromNow()})</span></h3>
        </div>
      </div>
    );
  }
}

export default Article;

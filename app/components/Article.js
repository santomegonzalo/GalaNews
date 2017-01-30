// @flow
import React, { Component } from 'react';
import moment from 'moment';
import { shell } from 'electron';
import styles from './Article.css';
import Bookmark from './utils/Bookmark';

class Article extends Component {
  open() {
    const { url } = this.props;

    shell.openExternal(url);
  }

  render() {
    const { author, description, title, urlToImage, publishedAt, sourceLogoSmall } = this.props;

    return (
      <div className={styles.article} onClick={() => this.open()}>
        {/* <Bookmark /> */}
        <div className={styles.imageContainer}>
          <img src={urlToImage} className={styles.image}/>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.imageSourceContainer}>
            <img src={sourceLogoSmall} className={styles.imageSource} />
          </div>
          <div className={styles.textContaienr}>
            <h3 className={styles.infoTitle}>{title}</h3>
            <h4 className={styles.infoAgo}>{moment(publishedAt).fromNow()}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;

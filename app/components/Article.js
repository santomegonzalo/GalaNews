// @flow
import React, { Component } from 'react';
import styles from './Article.css';

class Article extends Component {
  props: {
    article: () => void,
  };
  
  render() {
    const { author, description, title, url, urlToImage } = this.props;
    
    return (
      <div className={styles.article}>
        <div className={styles.imageContainer}>
          <img src={urlToImage} className={styles.image}/>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.infoTitle}>{title}</h3>
        </div>
      </div>
    );
  }
}

export default Article;

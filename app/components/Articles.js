// @flow
import React, { Component } from 'react';
import styles from './Articles.css';
import Article from './Article';

class Articles extends Component {
  constructor() {
    super();
    
    this.state = {
      height: 100
    };
  }
  
  props: {
    loadArticles: () => void,
    articles: () => void,
  };
  
  componentDidMount() {
    const { loadArticles } = this.props;
    
    window.addEventListener('resize', () => {
      this.resize();
    }, true);
    
    loadArticles();
  }
  
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
    
    console.log(articles.list);
    
    return (
      <div className={styles.articlesContainer}>
        { 
          articles.list.map((article) => <Article key={article.url} {...article} />)
        }
      </div>
    );
  }
}

export default Articles;

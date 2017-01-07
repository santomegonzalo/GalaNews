// @flow
import { NEWS_KEY } from '../../config';
import _ from 'lodash';

export const ARTICLE_LOADING = 'ARTICLE_LOADING';
export const ARTICLE_LOADED = 'ARTICLE_LOADED';
export const ARTICLE_ERROR = 'ARTICLE_ERROR';

export function loading() {
  return {
    type: ARTICLE_LOADING
  };
}

export function loadded(articles: Array<Object>) {
  return {
    type: ARTICLE_LOADED,
    payload: {
      articles
    }
  };
}

export function error(err: Object) {
  return {
    type: ARTICLE_ERROR
  };
}

export function loadArticles(page: number = 1) {
  return (dispatch: Function, getState: Function) => {
    dispatch(loading());

    return fetch(`https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=${NEWS_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        const list = json.articles;
        dispatch(loadded(list));
      })
      .catch((err) => dispatch(error(err)));
  };
}

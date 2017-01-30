// @flow
import { NEWS_KEY } from '../../config';
import Immutable, { List } from 'immutable';
import moment from 'moment';
import db from '../db';

export const ARTICLE_LOADING = 'ARTICLE_LOADING';
export const ARTICLE_LOADED = 'ARTICLE_LOADED';
export const ARTICLE_ERROR = 'ARTICLE_ERROR';

export function loading() {
  return {
    type: ARTICLE_LOADING
  };
}

export function loadded(articles: List) {
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

function mergeArticles(lists: Array<List>) {
  let mergedList = new List();
  lists.forEach((list) => {
    mergedList = mergedList.concat(list);
  });

  mergedList = mergedList.sort((articleA, articleB) => {
    // return new Date(articleA.get('publishedAt')) < new Date(articleB.get('publishedAt'));
    const momentA = moment(articleA.get('publishedAt'));
    const momentB = moment(articleB.get('publishedAt'));
    if (momentA > momentB) {
      return -1;
    } else if (momentA < momentB) {
      return 1;
    }

    return 0;
  });

  return mergedList;
}

export function loadArticles(page: number = 1) {
  return (dispatch: Function, getState: Function) => {
    dispatch(loading());

    let sourcesObject = {};

    return db.getSources()
      .then((sources) => {
        // generate the sourcesObject with source data to have a quickly access in every component
        sources.forEach((source) => {
          sourcesObject[source.id] = {
            logoLarge: source.logoLarge,
            logoMedium: source.logoMedium,
            logoSmall: source.logoSmall,
          };
        });

        return Promise.all(
          sources.map(
            (source) => fetch(`https://newsapi.org/v1/articles?source=${source.id}&apiKey=${NEWS_KEY}`)
          )
        );
      })
      .then((responses) => {
        return Promise.all(
          responses.map(
            (response) => response.json()
          )
        );
      })
      .then((listJSON) => {
        const articlesWithSourceId = listJSON.map(list => Immutable.fromJS(list.articles.map(article => {
          article.source = sourcesObject[list.source];
          return article;
        })));
debugger;
        // I dont need this anymore because I will use a sort from DB
        // const list = mergeArticles(articlesWithSourceId);
        let mergedList = new List();
        listJSON.map(list => list.articles).forEach((list) => {
          mergedList = mergedList.concat(list);
        });

        // saving into the DB
        return db.saveArticles(mergedList);
      })
      .then((something) => db.getArticles())
      .then((list) => {
        dispatch(loadded(Immutable.fromJS(list)));

        return null;
      })
      .catch((err) => dispatch(error(err)));
  };
}

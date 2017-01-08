// @flow
import { NEWS_KEY } from '../../config';
import Immutable, { List } from 'immutable';
import db from '../db';

export const SOURCE_LOADING = 'SOURCE_LOADING';
export const SOURCE_LOADED = 'SOURCE_LOADED';
export const SOURCE_ERROR = 'SOURCE_ERROR';
export const SOURCE_SELECTED = 'SOURCE_SELECTED';
export const SOURCE_SAVE = 'SORUCE_SAVE';
export const SOURCE_SAVING = 'SOURCE_SAVING';

export function loading() {
  return {
    type: SOURCE_LOADING,
  };
}

export function loadded(sources: List) {
  return {
    type: SOURCE_LOADED,
    payload: {
      sources
    },
  };
}

export function error(err: Object) {
  return {
    type: SOURCE_ERROR,
  };
}

export function selectSource(id: string, selected: boolean) {
  return {
    type: SOURCE_SELECTED,
    payload: {
      id,
      selected,
    },
  };
}

export function savingSources() {
  return {
    type: SOURCE_SAVING,
  };
}

function mergeLists(httpList, dbList) {
  if(dbList.size === 0) {
    return httpList;
  }

  let merged = httpList;

  dbList.forEach((source) => {
    const index = merged.findIndex(httpSource => httpSource.get('id') === source.get('id'));

    merged = merged.update(index, httpSource => httpSource.set('selected', true));
  });

  return merged;
}

export function saveSources() {
  return (dispatch: Function, getState: Function) => {
    const { list } = getState().sources;

    dispatch(savingSources());
    return db.saveSources(list.filter(source => source.get('selected')))
  };
}

export function loadSources() {
  return (dispatch: Function, getState: Function) => {
    dispatch(loading());

    // return db.cleanSources()
    //   .then(() => fetch(`https://newsapi.org/v1/sources?language=en&apiKey=${NEWS_KEY}`))
    return fetch(`https://newsapi.org/v1/sources?language=en&apiKey=${NEWS_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        return Promise.resolve(json.sources);
      })
      .then((httpList) => {
        return db.getSources()
          .then((dbList) => {
            return Promise.resolve({
              httpList: Immutable.fromJS(httpList),
              dbList: Immutable.fromJS(dbList),
            })
          });
      })
      .then((lists) => dispatch(loadded(mergeLists(lists.httpList, lists.dbList))))
      .catch((err) => dispatch(error(err)));
  };
}

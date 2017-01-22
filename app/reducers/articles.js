// @flow

import {
  ARTICLE_LOADING,
  ARTICLE_LOADED,
  ARTICLE_ERROR,
} from '../actions/articles';

export default function counter(state: Object = { init: true }, action: Object) {
  switch (action.type) {
    case ARTICLE_LOADING:
      return {
        ...state,
        loading: true,
        init: false,
      };
    case ARTICLE_LOADED:
      return {
        ...state,
        loading: false,
        list: action.payload.articles,
      };
    case ARTICLE_ERROR:
      return state;
    default:
      return state;
  }
}

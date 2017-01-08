// @flow
import { List } from 'immutable';
import db from '../db';

import {
  SOURCE_LOADING,
  SOURCE_LOADED,
  SOURCE_ERROR,
  SOURCE_SAVE,
  SOURCE_SAVING,
  SOURCE_SELECTED,
} from '../actions/sources';

function selectSource(id: string, selected: boolean, list: List) : List  {
  const index = list.findIndex((source) => source.get('id') === id);

  return list.update(index, (source) => source.set('selected', selected));
}

export default function sources(state: Object = { init: true }, action: Object) {
  switch (action.type) {
    case SOURCE_LOADING:
      return {
        ...state,
        loading: true,
        init: false,
      };
    case SOURCE_LOADED:
      return {
        ...state,
        loading: false,
        list: action.payload.sources,
      };
    case SOURCE_SELECTED:
      const { id, selected } = action.payload;

      return {
        ...state,
        list: selectSource(id, selected, state.list),
      };
    case SOURCE_SAVING:
      return {
        ...state,
        loading: true
      };
    case SOURCE_ERROR:
      return state;
    default:
      return state;
  }
}

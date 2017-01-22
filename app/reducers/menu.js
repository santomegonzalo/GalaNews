// @flow

import {
  MENU_VISIBLE,
} from '../actions/menu';

export default function counter(state: Object = { visible: false }, action: Object) {
  switch (action.type) {
    case MENU_VISIBLE:
      return {
        ...state,
        visible: action.payload.visible,
      };
    default:
      return state;
  }
}

// @flow
export const MENU_VISIBLE = 'MENU_VISIBLE';

let visible = false;

export function changeMenuVisible() {
  visible = !visible;

  return {
    type: MENU_VISIBLE,
    payload: {
      visible
    }
  };
}

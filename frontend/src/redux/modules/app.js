import { type, createAction } from '../utils'

export const ActionTypes = {
  TOGGLE_MENU: type('[App] Toggle menu'),
}

export const actions = {
  toggleMenu: () => createAction(ActionTypes.TOGGLE_MENU),
}

export const initialState = {
  menu: false,
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu,
      }
    default:
      return state
  }
}

export const selectors = {
  menu: (state) => state.menu,
}

import { createSelector } from 'reselect'

import { selectors as app } from './modules/app'

export const slices = {
  app: (state) => state.app,
}

export const selectors = {
  app: {
    menu: createSelector(slices.app, app.menu),
  },
}

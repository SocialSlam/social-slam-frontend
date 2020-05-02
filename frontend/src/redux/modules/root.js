import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { reducer as app } from './app'

export const rootReducer = (history) =>
  combineReducers({ app, router: connectRouter(history) })

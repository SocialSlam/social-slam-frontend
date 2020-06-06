import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from '../reducers/root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware /*routerMiddleware(history)*/)
)

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer)
}

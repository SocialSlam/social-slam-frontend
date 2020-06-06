import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import thunkMiddleware from 'redux-thunk'
import reducer from '../reducers/root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
})

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    /*routerMiddleware(history),*/ loggerMiddleware
  )
)

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept('../reducers/root-reducer', () =>
      store.replaceReducer(require('../reducers/root-reducer').default)
    )
  }
  return store
}

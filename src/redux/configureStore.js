import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './modules/root'

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export const history = isServer
  ? createMemoryHistory({
      initialEntries: ['/'],
    })
  : createBrowserHistory()

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
})

const composeEnhancer = composeWithDevTools({ trace: true, traceLimit: 25 })

export const configureStore = (initialState) => {
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancer(
      applyMiddleware(
        /*epicMiddleware,*/ routerMiddleware(history),
        loggerMiddleware
      )
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/root', () => {
      const nextRootReducer = require('./modules/root').rootReducer
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore

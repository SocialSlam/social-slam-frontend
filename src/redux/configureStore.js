import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './modules/root'

export const history = createBrowserHistory()

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
        loggerMiddleware
      )
    )
  )

  return store
}

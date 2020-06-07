import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'
import { store } from './redux/Store'

export const render = () =>
  ReactDOM.render(<App />, document.getElementById('root'))

render()

store.subscribe(render)

import 'core-js';
import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './App'
import { store } from './redux/Store'

const render = () => ReactDOM.render(<App />, document.getElementById('root'))

render()

store.subscribe(render)

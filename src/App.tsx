import * as React from 'react'
import { Router } from './Router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons'
import {Provider} from "react-redux"
import { configureStore, history } from './redux/configureStore'

const store = configureStore(window.__PRELOADED_STATE__)

library.add(faHeart, faBell)

export const App: React.FC = () => <Provider store={store}><Router /></Provider>

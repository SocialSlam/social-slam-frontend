import * as React from 'react'
import { Router } from './Router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faBell)

export const App: React.FC = () => <Router />

import { combineReducers, Reducer } from 'redux'
import { } from './auth/AuthReducer'



const combinedReducers = combineReducers({

})

export const reducer: Reducer = (state, action) => {
  return combinedReducers(state, action)
}

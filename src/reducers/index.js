import {combineReducers} from 'redux'
import notes from './notes'
import theme from './theme'

export const rootReducer = combineReducers({notes, theme})

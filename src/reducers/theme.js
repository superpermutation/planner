import {SWITCH_THEME} from '../actions'
import {CHANGE_THEME} from '../actions'
import {setStatusBarStyle} from 'expo-status-bar'

export default (state = true, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      // setStatusBarStyle(state ? 'light' : 'dark')
      return !state
    case CHANGE_THEME:
      // setStatusBarStyle(action.payLoad ? 'dark' : 'light')
      return action.payLoad
    default:
      // setStatusBarStyle(state ? 'light' : 'dark')
      return state
  }
}

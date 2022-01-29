import {NOTE_ADD, NOTE_CHANGE, NOTE_DELETE} from '../actions/index'
import uuid from 'react-native-uuid'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTE_ADD:
      return [
        ...state,
        {
          id: uuid.v4(),
          status: true,
          text: action.payLoad.text,
          date: action.payLoad.date,
        },
      ]
    case NOTE_CHANGE:
      return [
        ...state.filter((i) => i.id !== action.payLoad.id),
        action.payLoad,
      ]
    case NOTE_DELETE:
      return state.filter((i) => i.id !== action.payLoad)
    default:
      return state
  }
}

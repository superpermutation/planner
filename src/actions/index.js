export const NOTE_ADD = 'NOTE_ADD'
export const NOTE_CHANGE = 'NOTE_CHANGE'
export const NOTE_DELETE = 'NOTE_DELETE'
export const SWITCH_THEME = 'SWITCH_THEME'
export const CHANGE_THEME = 'CHANGE_THEME'

export const addNote = (text, date) => {
  return {
    type: NOTE_ADD,
    payLoad: {text, date},
  }
}

export const changeNote = (note) => {
  return {
    type: NOTE_CHANGE,
    payLoad: note,
  }
}

export const deleteNote = (id) => {
  return {
    type: NOTE_DELETE,
    payLoad: id,
  }
}

export const switchTheme = () => {
  return {
    type: SWITCH_THEME,
  }
}
export const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payLoad: theme,
  }
}

import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import {CheckBox} from './CheckBox'
import {changeNote, deleteNote} from '../actions'
import {useSelector, useDispatch} from 'react-redux'
import {CustomModal} from './CustomModal'

const Item = ({note, showEditModal, setSelectedNote}) => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const onPress = () => {
    dispatch(changeNote({...note, status: !note.status}))
  }
  const onLongPress = () => {
    setSelectedNote(note)
    showEditModal()
  }
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.container}>
        <CheckBox isEnabled={!note.status} />
        <Text style={theme ? styles.text : [styles.text, {color: 'white'}]}>
          {note.text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 10,
    padding: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
    marginLeft: 10,
  },
})

export {Item}

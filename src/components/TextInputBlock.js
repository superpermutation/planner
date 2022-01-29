import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import dayjs from 'dayjs'
import {addNote} from '../actions'
import {useTranslation} from 'react-i18next'

const TextInputBlock = ({selectedDate}) => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme)
  const [text, setText] = useState('')
  const {i18n, t} = useTranslation()
  const onSubmitEditing = () => {
    text.trim() !== '' &&
      dispatch(addNote(text.trim(), dayjs(selectedDate).format('YYYY-MM-DD')))
    setText('')
  }
  return (
    <View
      style={
        theme ? styles.container : [styles.container, {borderColor: 'white'}]
      }>
      <TextInput
        placeholder={t('ADD_TASK')}
        placeholderTextColor={theme ? '#00000080' : '#fffffff0'}
        value={text}
        style={theme ? {color: '#00000080'} : {color: '#fffffff0'}}
        onChangeText={setText}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,

    borderRadius: 10,
    margin: 10,
  },
})
export {TextInputBlock}

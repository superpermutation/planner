import React from 'react'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import Modal from 'react-native-modal'
import {Text, View, TouchableOpacity, Touchable, StyleSheet} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {deleteNote} from '../actions'
import {useTranslation} from 'react-i18next'
import {t} from 'i18next'

const CustomModal = ({isEditModalVisible, toggleEditModal, selectedNote}) => {
  const theme = useSelector((state) => state.theme)
  const notes = useSelector((state) => state.notes)
  const {i18n, t} = useTranslation()
  const dispatch = useDispatch()

  const onDeletePress = () => {
    dispatch(deleteNote(selectedNote.id))
    toggleEditModal()
  }
  return (
    <View>
      <Modal isVisible={isEditModalVisible} onBackdropPress={toggleEditModal}>
        <View style={styles.container}>
          <TouchableOpacity onPress={onDeletePress}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{t('DELETE')}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity onPress={toggleEditModal}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{t('CANCEL')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  textContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: '100%',
  },
})

export {CustomModal}

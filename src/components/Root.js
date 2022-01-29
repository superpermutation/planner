import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import {Header} from './Header'

import {TextInputBlock} from './TextInputBlock'
import {SafeAreaView} from 'react-native-safe-area-context'
import {CalendarCustom} from '../screens/Calendar/CalendarCustom'

import {Provider, useSelector} from 'react-redux'
import {List} from './List'
import {PersistGate} from 'redux-persist/integration/react'
import {Switch} from './Switch'
import {CustomModal} from './CustomModal'

const Root = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isEditModalVisible, setEditModalVisible] = useState(false)
  const [selectedNote, setSelectedNote] = useState()

  const toggleEditModal = () => {
    setEditModalVisible(!isEditModalVisible)
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  const theme = useSelector((state) => state.theme)
  return (
    <SafeAreaView style={theme ? styles.container : styles.containerBlack}>
      <KeyboardAvoidingView
        style={styles.keyBoard}
        behavior={Platform.OS === 'ios' && 'padding'}>
        <Header date={selectedDate} toggleModal={toggleModal} />
        <List
          selectedDate={selectedDate}
          showEditModal={toggleEditModal}
          setSelectedNote={setSelectedNote}
        />

        <TextInputBlock selectedDate={selectedDate} />
        <CalendarCustom
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          onDayPress={setSelectedDate}
          selectedDate={selectedDate}
        />
        <CustomModal
          isEditModalVisible={isEditModalVisible}
          toggleEditModal={toggleEditModal}
          selectedNote={selectedNote}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerBlack: {
    flex: 1,
    backgroundColor: '#000',
  },

  keyBoard: {
    flex: 1,
  },
})
export {Root}

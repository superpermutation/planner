import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import {CheckBox} from '../../components/CheckBox'
import {changeNote, deleteNote} from '../../actions'
import {useSelector, useDispatch} from 'react-redux'

const HomeItem = ({note}) => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const onPress = () => {
    dispatch(changeNote({...note, status: !note.status}))
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <CheckBox isEnabled={!note.status} opacity={!note.status} />
        <Text
          style={[
            theme ? styles.text : [styles.text, {color: 'white'}],
            !note.status
              ? {opacity: 0.3, textDecorationLine: 'line-through'}
              : {opacity: 1},
          ]}>
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

export {HomeItem}

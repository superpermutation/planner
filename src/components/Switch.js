import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useSelector, useDispatch} from 'react-redux'
import {switchTheme} from '../actions'

const Switch = () => {
  const theme = useSelector((state) => state.theme)

  const dispatch = useDispatch()
  const onPress = () => {
    dispatch(switchTheme())
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        {theme ? (
          <MaterialCommunityIcons
            name="toggle-switch"
            size={48}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            name="toggle-switch-off"
            size={48}
            color="white"
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

export {Switch}

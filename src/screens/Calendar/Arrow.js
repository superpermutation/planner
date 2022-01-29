import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {useSelector} from 'react-redux'

const Arrow = ({direction}) => {
  const theme = useSelector((state) => state.theme)
  return direction === 'left' ? (
    <MaterialIcons
      name="arrow-back-ios"
      size={24}
      color={theme ? 'black' : 'white'}
    />
  ) : (
    <MaterialIcons
      name="arrow-forward-ios"
      size={24}
      color={theme ? 'black' : 'white'}
    />
  )
}

const styles = StyleSheet.create({
  arrow: {},
})

export {Arrow}

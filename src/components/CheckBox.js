import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useSelector} from 'react-redux'

const CheckBox = ({isEnabled, opacity}) => {
  const theme = useSelector((state) => state.theme)
  return (
    <View
      style={[
        theme ? styles.container : [styles.container, {borderColor: 'white'}],
        opacity ? {opacity: 0.3} : {opacity: 1},
      ]}>
      {isEnabled && (
        <Ionicons
          name="ios-checkmark-sharp"
          size={14}
          color={theme ? 'black' : 'white'}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export {CheckBox}

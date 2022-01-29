import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'
const RadioButton = ({isSelected}) => {
  const theme = useSelector((state) => state.theme)
  return (
    <View
      style={
        theme
          ? styles.container
          : [styles.container, {borderColor: 'white', backgroundColor: 'black'}]
      }>
      {isSelected && (
        <View
          style={
            theme
              ? styles.chosenContainer
              : [styles.chosenContainer, {backgroundColor: 'white'}]
          }
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chosenContainer: {
    height: 12,
    width: 12,
    backgroundColor: 'black',
    borderRadius: 40,
  },
})

export {RadioButton}

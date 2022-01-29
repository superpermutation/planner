import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {RadioButtonGroup} from './RadioButtonGroup'
import {useSelector} from 'react-redux'

const SettingsBlock = ({title, options, selected, onSelect}) => {
  const theme = useSelector((state) => state.theme)

  return (
    <View style={styles.container}>
      <Text
        style={
          theme
            ? styles.textHeader
            : [styles.textHeader, {backgroundColor: 'black', color: 'white'}]
        }>
        {title}
      </Text>
      <RadioButtonGroup
        options={options}
        selected={selected}
        onSelect={onSelect}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 22,
    backgroundColor: 'white',
  },
})

export {SettingsBlock}

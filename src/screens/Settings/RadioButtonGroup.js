import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {RadioButton} from './RadioButton'
import {useSelector} from 'react-redux'

const RadioButtonGroup = ({options, selected, onSelect}) => {
  const theme = useSelector((state) => state.theme)
  return (
    <View>
      {options.map((item, index) => (
        <TouchableOpacity key={item} onPress={() => onSelect(index)}>
          <View style={styles.container}>
            <RadioButton isSelected={index === selected} />
            <Text
              style={[
                styles.text,
                theme ? {color: 'black'} : {color: 'white'},
              ]}>
              {item}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  text: {
    marginLeft: 10,
  },
})

export {RadioButtonGroup}

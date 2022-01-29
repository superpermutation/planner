import React, {useEffect} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  I18nManager,
} from 'react-native'
import {useSelector} from 'react-redux'

const OptionsBlock = ({Icon, option}) => {
  const theme = useSelector((state) => state.theme)
  return (
    <View style={styles.container}>
      {Icon}
      <Text style={[styles.text, theme ? {color: 'black'} : {color: 'white'}]}>
        {option}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
})

export {OptionsBlock}

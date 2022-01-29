import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/core'

const Header = ({title}) => {
  const navigation = useNavigation()
  const theme = useSelector((state) => state.theme)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialIcons
          name="arrow-back-ios"
          size={24}
          color={theme ? 'grey' : 'white'}
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.headerText,
          theme ? {color: 'black'} : {color: 'white'},
        ]}>
        {title}
      </Text>
      <View style={styles.imagineItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  imagineItem: {
    height: 48,
    width: 48,
  },
})

export {Header}

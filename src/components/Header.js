import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import dayjs from 'dayjs'

import {useSelector} from 'react-redux'
import {Switch} from './Switch'
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/core'
import {useTranslation} from 'react-i18next'

const languageChange = (language) => {
  switch (language) {
    case 'ru':
      return {
        sameDay: '[Сегодня] D MMMM', // The same day ( Today at 2:30 AM )
        nextDay: '[Завтра] D MMMM', // The next day ( Tomorrow at 2:30 AM )
        nextWeek: 'dddd D MMMM',
        lastWeek: 'dddd D MMMM',
        lastDay: '[Вчера] D MMMM', // The day before ( Yesterday at 2:30 AM )

        sameElse: 'dddd D MMMM', // Everything else ( 17/10/2011 )
      }
    case 'en':
      return {
        sameDay: '[Today] D MMMM', // The same day ( Today at 2:30 AM )
        nextDay: '[Tomorrow] D MMMM', // The next day ( Tomorrow at 2:30 AM )
        nextWeek: 'dddd D MMMM',
        lastWeek: 'dddd D MMMM',
        lastDay: '[Yesterday] D MMMM', // The day before ( Yesterday at 2:30 AM )

        sameElse: 'dddd D MMMM', // Everything else ( 17/10/2011 )
      }
    case 'es':
      return {
        sameDay: '[Hoy es] D MMMM', // The same day ( Today at 2:30 AM )
        nextDay: '[Mañana es] D MMMM', // The next day ( Tomorrow at 2:30 AM )
        nextWeek: 'dddd D MMMM',
        lastWeek: 'dddd D MMMM',
        lastDay: '[Ayer fue] D MMMM', // The day before ( Yesterday at 2:30 AM )

        sameElse: 'dddd D MMMM', // Everything else ( 17/10/2011 )
      }
    default:
      return {
        sameDay: '[Сегодня] D MMMM', // The same day ( Today at 2:30 AM )
        nextDay: '[Завтра] D MMMM', // The next day ( Tomorrow at 2:30 AM )
        nextWeek: 'dddd D MMMM',
        lastWeek: 'dddd D MMMM',
        lastDay: '[Вчера] D MMMM', // The day before ( Yesterday at 2:30 AM )

        sameElse: 'dddd D MMMM', // Everything else ( 17/10/2011 )
      }
  }
}

const Header = ({date, toggleModal}) => {
  const cutString = (a) => a.slice(0, 1).toUpperCase() + a.slice(1, a.length)
  const theme = useSelector((state) => state.theme)
  const navigation = useNavigation()
  const {i18n} = useTranslation()

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={theme ? 'grey' : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Text
            style={
              theme ? styles.headerText : [styles.headerText, {color: 'white'}]
            }>
            {cutString(
              dayjs(date).calendar(null, languageChange(i18n.language)),
            )}
          </Text>
        </TouchableOpacity>

        <View style={styles.user}>
          <Switch />
        </View>
      </View>
    </>
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
  icon: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  user: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export {Header}

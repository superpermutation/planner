import React, {useEffect} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  I18nManager,
  SectionList,
} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import {SafeAreaView} from 'react-native-safe-area-context'
import {HomeItem} from './HomeItem'

import {useSelector, useDispatch} from 'react-redux'
import {OptionsBlock} from './OptionsBlock'
import {Feather, AntDesign} from '@expo/vector-icons'
import {SettingsScreen} from '../Settings/SettingsScreen'
import {getWeekNotes} from './utils'
import {useTranslation} from 'react-i18next'

const HomeScreen = () => {
  const theme = useSelector((state) => state.theme)

  const {i18n, t} = useTranslation()
  const sectionNotes = useSelector((state) => getWeekNotes(state, t))
  const navigation = useNavigation()
  return (
    <SafeAreaView
      style={[
        styles.container,
        theme ? {backgroundColor: 'white'} : {backgroundColor: 'black'},
      ]}>
      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate('SettingsScreen')}>
        <OptionsBlock
          Icon={
            <Feather
              name="settings"
              size={24}
              color={theme ? 'black' : 'white'}
            />
          }
          option={t('SETTINGS')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate('Root')}>
        <OptionsBlock
          Icon={
            <AntDesign
              name="checksquare"
              size={24}
              color={theme ? 'black' : 'white'}
            />
          }
          option={t('ADD_TASK')}
        />
      </TouchableOpacity>
      <SectionList
        sections={sectionNotes}
        renderItem={({item}) => <HomeItem note={item} />}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({section: {title, data}}) =>
          data.length !== 0 && (
            <Text
              style={
                theme
                  ? styles.title
                  : [styles.title, {color: 'white', backgroundColor: 'black'}]
              }>
              {title}
            </Text>
          )
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  text: {
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    backgroundColor: 'white',
    margin: 10,
  },
})

export {HomeScreen}

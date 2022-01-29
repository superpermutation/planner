import React, {Suspense} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'

import {Header} from './Header'
import {SettingsBlock} from './SettingsBlock'
import {useSelector, useDispatch} from 'react-redux'
import {changeTheme} from '../../actions'
import dayjs from 'dayjs'

import {useTranslation} from 'react-i18next'

const languageArray = ['ru', 'en', 'es']

const SettingsScreen = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const {i18n, t} = useTranslation()
  const onThemeSelect = (index) => {
    dispatch(changeTheme(!index))
  }

  const onLanguageSelect = async (index) => {
    i18n.changeLanguage(languageArray[index])
    dayjs.locale(i18n.language)
  }

  return (
    <SafeAreaView
      style={[
        {flex: 1},
        theme ? {backgroundColor: 'white'} : {backgroundColor: 'black'},
      ]}>
      <Header title={t('SETTINGS')} />
      <SettingsBlock
        title={t('THEME')}
        options={[t('LIGHT'), t('DARK')]}
        selected={Number(!theme)}
        onSelect={onThemeSelect}
      />
      <SettingsBlock
        title={t('LANGUAGE')}
        options={['Русский', 'English', 'Español']}
        onSelect={onLanguageSelect}
        selected={languageArray.indexOf(i18n.language)}
      />
    </SafeAreaView>
  )
}

export {SettingsScreen}

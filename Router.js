import React, {useEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useSelector} from 'react-redux'
import {HomeScreen} from './src/screens/Home/HomeScreen'
import {Root} from './src/components/Root'
import {SettingsScreen} from './src/screens/Settings/SettingsScreen'
import {setStatusBarStyle} from 'expo-status-bar'

import {useTranslation} from 'react-i18next'
const Stack = createNativeStackNavigator()

export const Router = () => {
  const theme = useSelector((state) => state.theme)

  useEffect(() => {
    setStatusBarStyle(theme ? 'dark' : 'light')
  }, [theme])

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Root" component={Root} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

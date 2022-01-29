import React, {Suspense} from 'react'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/es'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import {store, persistor} from './src/store'
import {Provider} from 'react-redux'

import {PersistGate} from 'redux-persist/integration/react'

import {NavigationContainer} from '@react-navigation/native'
import {Router} from './Router'

import './src/i18n'
import {ActivityIndicator} from 'react-native'

dayjs.extend(calendar)
dayjs.extend(weekOfYear)

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Suspense fallback={<ActivityIndicator animating={true} />}>
            <Router />
          </Suspense>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

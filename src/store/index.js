import {createStore} from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer, createTransform} from 'redux-persist'
import {rootReducer} from '../reducers'
import i18n from '../i18n'

const persistConfig = {
  key: '@firstapp',
  storage: AsyncStorage,
  whitelist: ['notes', 'theme'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export {store, persistor}

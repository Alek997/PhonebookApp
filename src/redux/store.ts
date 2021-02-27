import AsyncStorage from '@react-native-async-storage/async-storage'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { contactsReducer, countriesReducer } from './reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  contactsReducer,
  countriesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)

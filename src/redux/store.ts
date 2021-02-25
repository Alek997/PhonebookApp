import AsyncStorage from '@react-native-async-storage/async-storage'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import contactsReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  contactsReducer: persistReducer(persistConfig, contactsReducer)
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

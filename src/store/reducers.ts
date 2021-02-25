import { combineReducers } from 'redux'

import contactsReducer from './contacts.reducer'

const rootReducer = combineReducers({
  posts: contactsReducer
})

export default rootReducer

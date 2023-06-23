import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import priceReducer from './priceSlice'
import toggleSorter from './toggleSorterSlice'

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['toggleSorter'],
}

const reducers = combineReducers({
   price: priceReducer,
   toggleSorter: toggleSorter,
})
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
})
export const persistor = persistStore(store)

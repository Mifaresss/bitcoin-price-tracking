'use client'
import { persistor, store } from '@/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { MainContent } from './MainContent'

export function StartComponent() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <MainContent />
         </PersistGate>
      </Provider>
   )
}

'use client'
import { store } from '@/store/store'
import { Provider } from 'react-redux'
import { MainContent } from './MainContent'

export function StartComponent() {
   return (
      <Provider store={store}>
         <MainContent />
      </Provider>
   )
}

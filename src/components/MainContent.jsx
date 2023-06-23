import { fetchPrice } from '@/store/priceSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from './Header'
import { Pagination } from './Pagination'
import { Sorter } from './Sorter'
import { Table } from './Table'

export function MainContent() {
   const timeout = useSelector(state => state.price.timeout)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchPrice())
      const interval = setInterval(() => {
         dispatch(fetchPrice())
      }, timeout)

      return () => {
         clearInterval(interval)
      }
   }, [timeout])

   return (
      <div className='main-container'>
         <Sorter />
         <div>
            <Header />
            <Table />
            <Pagination />
         </div>
      </div>
   )
}

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Error } from './Error'
import { Pagination } from './Pagination'
import { Preloader } from './Preloader'
import { TableBody } from './TableBody'
import { TableHead } from './TableHead'

export function Table() {
   const [prices, setBitcoin] = useState([])
   const [error, setError] = useState(null)
   const [currentPage, setCurrentPage] = useState(1)
   const [pageSize, setPageSize] = useState(14)

   const priceData = useSelector(state => state.price)

   useEffect(() => {
      setBitcoin(priceData.prices)
      setError(priceData.error)
      setCurrentPage(priceData.currentPage)
      setPageSize(priceData.pageSize)
   }, [priceData])

   const startIndex = (currentPage - 1) * pageSize
   const endIndex = startIndex + pageSize
   const paginatedPrices = prices.slice(startIndex, endIndex)

   if (error) return <Error error={error} />
   return prices.length ? (
      <>
         <div className='table bg-zinc-800 rounded-xl'>
            <TableHead />
            <TableBody paginatedPrices={paginatedPrices} />
            {/* <TableDateColumn paginatedPrices={paginatedPrices} />
            <TablePriceColumn paginatedPrices={paginatedPrices} /> */}
         </div>
         <Pagination pricesLength={prices.length} currentPage={currentPage} pageSize={pageSize} />
      </>
   ) : (
      <Preloader />
   )
}

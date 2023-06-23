import { setCurrentPage } from '@/store/priceSlice'
import { useDispatch } from 'react-redux'

export function Pagination({ pricesLength, currentPage, pageSize }) {
   const dispatch = useDispatch()

   function handlePageChange(currentPage) {
      dispatch(setCurrentPage({ currentPage }))
   }
   if (!pricesLength) return

   return pricesLength > pageSize && (
         <div className='pagination'>
            {[...Array(Math.ceil(pricesLength / pageSize)).keys()].map(pageNumber => (
               <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber + 1)}
                  className={currentPage === pageNumber + 1 ? 'active' : ''}
               >
                  {pageNumber + 1}
               </button>
            ))}
         </div>
      )
}

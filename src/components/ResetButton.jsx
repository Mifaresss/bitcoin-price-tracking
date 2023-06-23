import { clearPrices } from '@/store/priceSlice'
import { useDispatch } from 'react-redux'

export function ResetButton() {
   const dispatch = useDispatch()

   function resetTable() {
      dispatch(clearPrices())
   }

   return (
      <button
         onClick={resetTable}
         className='reset-button absolute right-0 -bottom-11 text-base px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 w-fit justify-self-end'
      >
         Reset table
      </button>
   )
}

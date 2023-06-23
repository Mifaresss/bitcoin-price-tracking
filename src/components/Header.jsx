import { changeTimeout } from '@/store/priceSlice'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

export function Header() {

   const selectRef = useRef(null)
   const dispatch = useDispatch()

   function handleIntervalValue() {
      dispatch(changeTimeout({ timeout: selectRef.current.value * 60 }))
   }


   return (
      <div className='rounded-xl p-2 bg-zinc-800 text-2xl flex gap-7 justify-center items-center relative'>
         <p>Scan interval:</p>
         <div className='bg-zinc-900 p-2 rounded-lg flex items-center'>
            <select onChange={handleIntervalValue} ref={selectRef} className='cursor-pointer bg-zinc-900 text-lg' name='interval'>
               <option value='1000'>1 min</option>
               <option value='30000'>30 min</option>
               <option value='60000'>1 hour</option>
            </select>
         </div>
      </div>
   )
}

import { changeTimeout } from '@/store/priceSlice'
import { useDispatch, useSelector } from 'react-redux'
import { BurgerMenuButton } from './BurgerMenuButton'

export function Header() {
   const interval = useSelector(state => state.price.timeout)
   const dispatch = useDispatch()

   function handleIntervalValue(e) {
      dispatch(changeTimeout({ timeout: e.target.value }))
   }

   return (
      <header className='header rounded-xl p-2 bg-zinc-800 flex justify-center items-center relative'>
         <BurgerMenuButton />
         <p>Scan interval:</p>
         <div className='bg-zinc-900 p-2 rounded-lg flex items-center'>
            <select
               onChange={handleIntervalValue}
               value={interval}
               className='cursor-pointer bg-zinc-900'
               name='interval'
            >
               <option value='60000'>1 min</option>
               <option value='1800000'>30 min</option>
               <option value='3600000'>1 hour</option>
            </select>
         </div>
      </header>
   )
}

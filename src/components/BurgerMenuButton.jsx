import { toggleSorter } from '@/store/toggleSorterSlice'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function BurgerMenuButton() {
   const wrapperButtonRef = useRef()
   const isOpen = useSelector(state => state.toggleSorter.isOpen)
   const dispatch = useDispatch()

   function toggleSorterHandler() {
      dispatch(toggleSorter({ isOpen: !isOpen }))
   }
   if (isOpen) {
      wrapperButtonRef.current?.classList.add('open')
   } else {
      wrapperButtonRef.current?.classList.remove('open')
   }

   return (
      <div ref={wrapperButtonRef} onClick={toggleSorterHandler} className='wrapper-burger-button'>
         <button className='menu-button'>
            <span></span>
         </button>
      </div>
   )
}

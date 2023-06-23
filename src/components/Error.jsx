export function Error({ error }) {
   return (
      <article className='flex justify-center items-center mt-60 text-2xl text-red-400 text-center max-w-lg mx-auto'>
         {error}
      </article>
   )
}

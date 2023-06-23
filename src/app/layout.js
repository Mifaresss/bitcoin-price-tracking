import './styles/reset.css'
import './styles/globals.css'

export const metadata = {
   title: 'Bitcoin price tracking',
   description: 'Bitcoin price tracking app',
}

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className='bg-zinc-900 text-zinc-100 leading-tight text-xl'>{children}</body>
      </html>
   )
}

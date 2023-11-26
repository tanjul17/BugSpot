import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    // eslint-disable-next-line tailwindcss/classnames-order
    <main className='flex justify-center min-h-screen w-full items-center'>{children}</main>
  )
}
 
export default Layout
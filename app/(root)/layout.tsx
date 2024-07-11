import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
     //accept children from props and type of children as react.reactnode
  return (
    <main className='root'>
      <Sidebar />
      <MobileNav />
        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
    </main>
  )
}

export default Layout
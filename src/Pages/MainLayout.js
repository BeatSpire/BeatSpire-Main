import React, { Children } from 'react'
import Navbar from './Landing/components/Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className='bg-black text-white overflow-hidden contrast-100'>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout
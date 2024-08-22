import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Userrequest = () => {
  return (
    <div className='w-full pt-10 h-[500px] flex flex-col justify-start items-center'>
        <h1 className='text-center text-3xl font-semibold'>Visitor Pass</h1>
        <div>
        
            <Outlet />
        </div>
    </div>
  )
}

export default Userrequest
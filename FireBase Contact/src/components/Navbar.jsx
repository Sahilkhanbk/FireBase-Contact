import React from 'react'

function Navbar() {
    return (
        <div 
        className='h-[60px] text-xl font-medium bg-white my-4
         rounded-lg flex justify-center items-center gap-2'>
                <img src="../public/logos_firebase.svg" alt="" />
                <h1>Firebase Contact app</h1>
        </div>
    )
}

export default Navbar

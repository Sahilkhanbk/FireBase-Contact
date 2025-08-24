import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { createPortal } from 'react-dom'


const Model = ({ onClose, isOpen, children }) => {
    return createPortal(
        <>
            {isOpen && (
                <>
                    <div className=' m-auto relative z-50  bg-white min-h-[200px] 
                    max-w-[80%] p-3'>
                        <div className='flex justify-end'>
                            <MdOutlineClose onClick={onClose}
                                className='self-end text-2xl' />
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                    <div className='absolute top-0 z-40 h-screen backdrop-blur w-screen'>

                    </div>
                </>

            )}
        </>
        , document.getElementById("model-root"))


}

export default Model

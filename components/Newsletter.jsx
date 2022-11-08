import { Send } from '@material-ui/icons'
import React from 'react'

const Newsletter = () => {
  return (
    <div className="h-[60vh] flex items-center justify-center flex-col">
        <h1 className="text-7xl mb-5">Newsletter</h1>
        <div className="text-2xl font-light mb-5">Get timely updates from your favorite products.</div>
        <div className="w-2/4 h-[40px] flex justify-between bg-white">
            <input type="text" placeholder='Your email' className="border-none outline-none text-black flex-[8] pl-5" />
             <button className="p-2 bg-[#b60003] rounded-none flex-1 bg-gradient-to-r from-[#b60003] to-[#7f0000]">
                  <Send/>   
             </button> 
        </div>
    </div>
  )
}

export default Newsletter
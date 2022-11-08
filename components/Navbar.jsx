import React from 'react'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Badge } from '@mui/material'
import Link from "next/link"



const Navbar = () => {
  return (
    <div className='h-[50px] md:h-14'>
        <div className='py-5 px-0 flex justify-between items-center md:py-5 md:px-[10px]'>
            <div className='flex-1 flex items-center'>
                <div className='invisible md:font-bold cursor-pointer text-sm md:visible'>EN</div>
                <div className='flex items-center ml-7 p-2'>
                <input type="text" className='text-black outline-none bg-gray-300 rounded-sm p-1' />
                <Search style={{color:"gray",padding:0 , marginLeft:5}}/>
                </div>
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-center text-xl tracking-widest'>Joan-Dev</h1>
            </div>
            <div className='flex-1 flex justify-end'>
                <button className='tracking-wider font-bold cursor-pointer text-sm ml-6 p-2 bg-gradient-to-r from-[#b60003] to-[#7f0000] border-none'><Link href="/register">REGISTER</Link></button>
                <button className='tracking-wider font-bold cursor-pointer text-sm ml-6 p-2 hover:bg-gradient-to-r from-[#b60003] to-[#7f0000]'><Link href="/login">SIGN IN</Link></button>
                <div className='font-bold cursor-pointer text-md ml-6 mr-3'>
                    <Badge badgeContent={4} color="info">
                        <Link href="/Cart"><ShoppingCartOutlined style={{color:"#b60003", height:35, width:35}}/></Link>
                    </Badge>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
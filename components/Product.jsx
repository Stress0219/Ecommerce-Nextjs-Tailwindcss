import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'

const Product = ({item}) => {
  return (
    <div className="flex-1 m-1 min-w-[280px] h-80 flex items-center justify-center relative">
        <div className="circle w-[200px] h-[200px] rounded-[50%] bg-red-300 absolute"></div>
        <img src={item.img} className="h-3/4 w-9/12 z-[2]" />
        <div className="info w-full h-full absolute t-0 left-0 z-[3] bg-[rgba(0,0,0,0.2)] flex items-center justify-center opacity-0 hover:opacity-100 transition-all ease-in cursor-pointer">
            <div className="icons w-10 h-10 rounded-[50%] bg-[#333] flex items-center justify-center m-3 hover:scale-110 transition-all ease-in duration-300">
                <ShoppingCartOutlined/>
            </div>
            <div className="icons w-10 h-10 rounded-[50%] bg-[#333] flex items-center justify-center m-3 hover:scale-110 transition-all ease-in duration-300">
                <SearchOutlined/>
            </div>
            <div className="icons w-10 h-10 rounded-[50%] bg-[#333] flex items-center justify-center m-3 hover:scale-110 transition-all ease-in duration-300">     
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product
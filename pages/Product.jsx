import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Product = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <div id="Wrapper" className="flex p-12">
            <div id="Image" className="flex-1">
                <img src="/assets/popular-blue-winterboots.jpg" alt="blue winter boots" className="w-full h-[70vh] object-cover" />
            </div>
            <div id="Info" className="flex-1 pl-8 pr-8">
                <h1 className="font-extralight text-5xl mt-5 mb-5">Winter Boots</h1>
                <p className="mt-5 mb-5">
                   Lorem ipsum dolor sit amet, 
                   consectetur adipisicing elit. Illum quasi dolorem expedita incidunt quos,
                   aspernatur possimus impedit nihil corrupti? Veritatis?
                </p>
                <span className="font-thin text-4xl">Price $30</span>
                <div id="FilterContainer" className="flex justify-between w-3/6 mt-7 mb-7">
                <div id="Filter" className="flex items-center">
                    <span id="FilterTitle" className="text-xl font-extralight">Color:</span>
                    <div className="w-5 h-5 rounded-[50%] bg-black mr-2 ml-2 cursor-pointer"></div>
                    <div className="w-5 h-5 rounded-[50%] bg-sky-300 mr-2 cursor-pointer"></div>
                    <div className="w-5 h-5 rounded-[50%] bg-cyan-600 mr-2 cursor-pointer"></div>
                </div>
                <div id="Filter2" className="flex items-center">
                    <span id="FilterTitle" className="text-xl font-extralight">Size:</span>
                    <select id="FilterSize" className="ml-4 p-1">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                </div>
                <div id="AddContainer" className="flex items-center w-[50%] justify-between">
                    <div id="AmountContainer" className="flex items-center font-bold">
                        <Remove className="cursor-pointer"/>
                        <span id="AmountNumb" className="w-9 h-9 rounded-xl flex items-center justify-center mr-2 ml-2">1</span>
                        <Add className="cursor-pointer"/>
                    </div>
                    <button className="p-4 bg-gradient-to-r from-[#b60003] to-[#7f0000]">ADD TO CART</button>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Product
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {
  return (
    <div className="overflow-hidden">
        <Announcement/>
        <Navbar/>
        <div className="p-5">
            <h1 className="text-center font-light text-2xl">YOUR BAG</h1>
            <div className="flex items-center justify-between">
                <button className="p-3 cursor-pointer hover:bg-gradient-to-r from-[#b60003] to-[#7f0000]">CONTINUE SHOPPING</button>
                <div className="flex">
                    <p className="underline cursor-pointer">Shopping Bag(2)</p>
                    <p className="underline cursor-pointer ml-2 mr-2">You Wishlist(0)</p>
                </div>
                <button className="p-3 cursor-pointer bg-gradient-to-r from-[#b60003] to-[#7f0000]">CHECKOUT NOW</button>
            </div>
            <div id='Bottom' className="flex justify-between">
                <div id='Info' className="flex-[3]">
                    <div id="Product" className="flex justify-between">
                        <div id="ProductDetail" className="flex-[2] flex">
                            <img src="/assets/popular-gloves.jpg" alt="Gloves" className="w-52" />
                            <div id='Details' className="flex flex-col p-5 justify-around">
                                <p><b>Product:</b>Winter Gloves</p>
                                <p><b>ID:</b>46854641352185</p>
                                <div className="rounded-[50%] h-5 w-5 bg-gray-400"></div>
                                <p><b>Size:</b>S</p>
                            </div>
                        </div>
                        <div id="PriceDetail" className="flex-[1] flex items-center justify-center flex-col">
                            <div id="AmountContainer" className="flex items-center mb-5">
                                <Add/>
                                <span id="ProductAmount" className="text-2xl m-1">2</span>
                                <Remove/>
                            </div>
                            <div id="ProductPrice" className="text-3xl font-extralight">$ 30</div>
                        </div>
                    </div>
                    <hr/>
                    <div id="Product" className="flex justify-between">
                        <div id="ProductDetail" className="flex-[2] flex">
                            <img src="/assets/popular-gloves.jpg" alt="Gloves" className="w-52" />
                            <div id='Details' className="flex flex-col p-5 justify-around">
                                <p><b>Product:</b>Winter Gloves</p>
                                <p><b>ID:</b>46854641352185</p>
                                <div className="rounded-[50%] h-5 w-5 bg-gray-400"></div>
                                <p><b>Size:</b>S</p>
                            </div>
                        </div>
                        <div id="PriceDetail" className="flex-[1] flex items-center justify-center flex-col">
                            <div id="AmountContainer" className="flex items-center mb-5">
                                <Add/>
                                <span id="ProductAmount" className="text-2xl m-1">2</span>
                                <Remove/>
                            </div>
                            <div id="ProductPrice" className="text-3xl font-extralight">$ 30</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col border-solid border-[1px] border-[gray] rounded-xl p-5 h-[50vh] mt-4">
                    <h1 className="text-2xl font-light text-center">ORDER SUMMARY</h1>
                    <div id='SummaryItem'className="mt-[10px] mb-[20px] ml-0 mr-0 flex justify-between">
                        <h1 id='SummaryItemText'>Subtotal</h1>
                        <span id='SummaryItemPrice'>$ 60</span>
                    </div>
                    <div id='SummaryItem' className="mt-[10px] mb-[20px] ml-0 mr-0 flex justify-between">
                        <h1 id='SummaryItemText'>Estimated Shipping</h1>
                        <span id='SummaryItemPrice'>$ 4.80</span>
                    </div>
                    <div id='SummaryItem' className="mt-[10px] mb-[20px] ml-0 mr-0 flex justify-between">
                        <h1 id='SummaryItemText'>Shipping Discount</h1>
                        <span id='SummaryItemPrice'>$ -4.80</span>
                    </div>
                    <div id='SummaryItem' className="mt-[10px] mb-[20px] ml-0 mr-0 flex justify-between">
                        <h1 id='SummaryItemText' className="text-2xl font-semibold">Total</h1>
                        <span id='SummaryItemPrice' className="text-2xl font-semibold">$ 60</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#b60003] to-[#7f0000] p-2 mt-1">CHECKOUT NOW</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart
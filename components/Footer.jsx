import { Facebook, Instagram, MailOutline, Pinterest, Room, Twitter, Phone } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex bg-neutral-800">
        <div className="flex-1 flex flex-col p-5">
            <img src="/assets/Joan-Dev.png" alt="Joan-Dev" className="w-[40%] h-[40%]" />
            <p className="mt-5 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum,
                quae animi dolorem sed deleniti fugit optio asperiores nihil ex.
            </p>
            <div id="socialMedia" className="flex">
                <div className="w-10 h-10 rounded-[50%] text-white bg-[#3B5999] flex items-center justify-center mr-5 cursor-pointer">
                    <Facebook/>
                </div>
                <div className="w-10 h-10 rounded-[50%] text-white bg-[#E4405F] flex items-center justify-center mr-5 cursor-pointer">
                    <Instagram/>
                </div>
                <div className="w-10 h-10 rounded-[50%] text-white bg-[#55ACEE] flex items-center justify-center mr-5 cursor-pointer">
                    <Twitter/>
                </div>
                <div className="w-10 h-10 rounded-[50%] text-white bg-[#E60023] flex items-center justify-center mr-5 cursor-pointer">
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className="flex-1 p-5">
            <h3 className="mb-8 text-2xl">Usefull Links</h3>
            <ul className="m-0 p-0 flex flex-wrap">
                <li className="w-[50%] mb-3">Home</li>
                <li className="w-[50%] mb-3">Cart</li>
                <li className="w-[50%] mb-3">Woman Fashion</li>
                <li className="w-[50%] mb-3">Man Fashion</li>
                <li className="w-[50%] mb-3">Accesories</li>
                <li className="w-[50%] mb-3">My Account</li>
                <li className="w-[50%] mb-3">Order Tracking</li>
                <li className="w-[50%] mb-3">Wishlist</li>
                <li className="w-[50%] mb-3">Terms</li>
            </ul>
        </div>
        <div className="flex-1 p-5">
            <h3 className="mb-5 flex items-center text-2xl">Contact</h3>
            <div className="mb-5 flex items-center">
                <Room className="mr-3"/> 19 Street Lawton
            </div>
            <div className="mb-5 flex items-center">
                <Phone className="mr-3"/> +53 54142931
            </div>
            <div className="mb-5 flex items-center">
                <MailOutline className="mr-3"/> contact@joan.dev
            </div>
        </div>
    </div>
  )
}

export default Footer
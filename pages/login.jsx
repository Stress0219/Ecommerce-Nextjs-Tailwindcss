import React from 'react'
import Link from 'next/link'

const login = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[url('/assets/bg-login.jpg')] bg-cover overflow-hidden">
        <div className="w-[25%] p-4">
            <h1 className="text-xl font-extralight">SIGN IN</h1>
                <form className="flex flex-col">
                    <input type="text" placeholder="UserName" className="flex-1 min-w-[25%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                    <input type="password" placeholder="Password" className="flex-1 min-w-[25%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                    <button className="p-2 mb-3 cursor-pointer mt-2 bg-gradient-to-r from-[#b60003] to-[#7f0000]">LOGIN</button>
                    <Link href="#"><p className="mb-3 cursor-pointer underline text-sm">DO NOT YOU REMEMBER THE PASSWORD?</p></Link>
                    <Link href="/register"><p className="mt-1 cursor-pointer underline text-sm">CREATE NEW ACCOUNT</p></Link>
                </form>
            </div>
</div>
  )
}

export default login
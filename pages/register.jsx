import React from 'react'

const register = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[url('/assets/bg-register.jpg')] bg-cover overflow-hidden">
        <div className="w-2/5 p-4">
            <h1 className="text-xl font-extralight">CREATE ACCOUNT</h1>
            <form className="flex flex-wrap">
                <input type="text" placeholder="Name" className="flex-1 min-w-[40%] mt-5 mb-2 mr-2 ml-2 p-2"/>
                <input type="text" placeholder="Last Name" className="flex-1 min-w-[40%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                <input type="text" placeholder="UserName" className="flex-1 min-w-[40%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                <input type="email" placeholder="example@email.com" className="flex-1 min-w-[40%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                <input type="password" placeholder="Password" className="flex-1 min-w-[40%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                <input type="password" placeholder="Confirm Password" className="flex-1 min-w-[40%] mt-5 mb-2 p-2 mr-2 ml-2"/>
                <span className="underline cursor-pointer">By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
                <button className="p-3 cursor-pointer mt-2 bg-gradient-to-r from-[#b60003] to-[#7f0000]">CREATE</button>
            </form>
        </div>
    </div>
  )
}

export default register
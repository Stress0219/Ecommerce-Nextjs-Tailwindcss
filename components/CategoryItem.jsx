import React from 'react'

const CategoryItem = ({item}) => {
  return (
    <div className='flex-1 m-1 h-[70vh] relative'>
        <img className='w-full h-full object-cover' src={item.img} alt="" />
        <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center flex-col'>
            <h1 className='text-xl tracking-wider font-semibold'>{item.title}</h1>
            <button className='p-3 mt-6 mb-2 font-semibold bg-gradient-to-r from-[#b60003] to-[#7f0000]'>SHOP NOW!</button>
        </div>

    </div>
  )
}

export default CategoryItem
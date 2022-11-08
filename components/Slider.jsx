import React from 'react'
import Carousel from 'react-material-ui-carousel'

function Slider()
{
    var items = [
        {
            title: "WINTER COLLECTION",
            description: "DONT COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
            img:"/assets/slider-2.png"
        },
        {
            title: "AUTUMN COLLECTION",
            description: "DONT COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
            img:"/assets/slider-3.png"
        },
        {
            title: "SUMMER SALE",
            description: "DONT COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS",
            img:"/assets/slider-4.png"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div className='w-full h-screen flex'>
            <div className='h-full'>
            <div className='flex items-center w-screen h-screen'>               
            <div className='flex-1 h-full'>   
            <img src={props.item.img} className='h-screen w-screen ml-20' />
            </div>
            <div className='flex-1 p-12'>
            <h2 className='text-6xl font-bold tracking-widest'>{props.item.title}</h2>
            <p className='mt-12 mb-12 text-xl tracking-wider'>{props.item.description}</p>
            <button className='p-5 border-none shadow-md shadow-[#ee0c03] text-xl bg-gradient-to-r from-[#b60003] to-[#7f0000]'>
                SHOW NOW
            </button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Slider
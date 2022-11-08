import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Productlist = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <h1 className="m-5">Dresses</h1>
        <div id='filter_container' className="flex justify-between">
            <div id='filter' className="m-5">
              <span className="text-xl font-semibold mr-5">Filter Products:</span>
              <select name="Color" className="p-3 mr-5">
                <option value="Color" defaultValue disabled>Color</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
              </select>
              <select name="Size" className="p-3 mr-5">
                <option value="Size" defaultValue disabled>Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div id='filter' className="m-5">
              <span className="text-xl font-semibold mr-5">Sort Products:</span>
              <select name="Sort" className="p-3 mr-5">
                <option value="Newest" defaultValue>Newest</option>
                <option value="Price (asc)">Price (asc)</option>
                <option value="Price (desc)">Price (desc)</option>
              </select>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Productlist
import Head from 'next/head'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Product from './Product'
import Productlist from './Productlist'
import Cart from './Cart'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Announcement/>
      <Navbar/>    
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      {/* <Productlist/>
      <Product/>
      <Cart/> */}
    </div>
  )
}

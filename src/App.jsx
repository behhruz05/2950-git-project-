import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Cattegory from './components/Cattegory'
import CatBanner from './components/CatBanner'
import ShopCattegory from './components/ShopCattegory'
import ShopProducts from './components/ShopProducts'
import SecondBanner from './components/SecondBanner'
import Cattegoryprice from './components/Cattegoryprice'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>

      <main>
        <div className='flex'>
          <Cards />
          <Cattegory />
        </div>

        <CatBanner />
        <ShopCattegory />
        <ShopProducts />
        <SecondBanner />
        <Cattegoryprice/>
      </main>


      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App

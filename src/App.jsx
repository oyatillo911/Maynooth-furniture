import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Detail from './pages/detail/Detail'

function App() {


  const [data, setdata] = useState([
    {
      id:1,
      img: "/imgs/one_logo.svg",
      title: "Ancient",
      price: "345",
      desc: "green 2-Seater velvet sofa ",
      allInfo: "1. Pre-heat the oven to 200C/3C/gas 5. Place the carrot, leek and tofu in a large bowl. Add the stock and mix well. 2. Add the rest of the ingredients and mix well. 3. Place the mixture in a large bowl",
      imgs: [
        " https://m.media-amazon.com/images/I/61Sc48w-WbL._AC_UF1000,1000_QL80_DpWeblab_.jpg", "https://www.bhg.com/thmb/ShnpbVzPBm-0TA97pHaPf_sJxHQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/traditional-yellow-living-room-6b10c925-ad93ac0ddc4e49e4a5b23a44d8085c19.jpg", "https://www.bhg.com/thmb/Vktqjv5zlK5Miw7RUwxONQVdENs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/living-room-blue-couch-c94b6c0c-46bf06b7d34a4a2687730a4679bb3634.jpg",
        "https://www.bhg.com/thmb/xRP2tOewokAJEi_xzfqy9eAREQs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/teal-colored-living-room-furniture-4ca9cf3d-dcee8ee892ed434e853e15cb1863eb90.jpg",
      ]
    },
    {
      id: 2,
      img: "/imgs/one_logo_2.svg",
      title: "Comfort",
      price: "359",
      desc: "green 2-Seater velvet sofa",
      allInfo: "1. Pre-heat the oven to 200C/3C/gas 5. Place the carrot, leek and tofu in a large bowl. Add the stock and mix well. 2. Add the rest of the ingredients and mix well. 3. Place the mixture in a large bowl",
      imgs: [
        " https://www.cristalrecord.com/20373-FancyBox/dera-black-bamboo-lampshade-300x280mm.jpg", "https://http2.mlstatic.com/D_NQ_NP_962002-MLU103624845810_012026-O.webp", "https://meeshan.com/cdn/shop/files/si_3618811b-f175-4acb-9f64-babb99a7c99f.jpg?v=1769257040&width=1214", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAJKxtovcHWIj6GZJaRGTJ2aiyh3DZp_JkS5AQcZur1Phxn4eyYl5xuU&s=10",
      ]
    }
    
  ])
  
  


  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home data={data} setdata={setdata} />} />
          <Route path='/detail/:id' element={<Detail data={data} />} />

        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
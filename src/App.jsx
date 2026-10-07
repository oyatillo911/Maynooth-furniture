import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Detail from './pages/detail/Detail'

function App() {


  const [data, setdata] = useState(JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):[],
  )
  localStorage.setItem("data",JSON.stringify(data))
  
  


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
import React, { useState } from 'react'

function Herohomesections({ data, setdata }) {
  const [modal, setmodal] = useState(false)
  const [img, setimg] = useState("")
  const [title, settitle] = useState("")
  const [price, setprice] = useState("")
  const [desc, setdeck] = useState("")

  return (
    <>
      <div className="hero  bg-[#F2F2F2]   ">
        <div className="container  text-center w-[1200px] mx-auto pt-[50px] ">
          <h2 className=' text-[48px] text-[#000000] font-medium '>Your Best Value Products</h2>
          <p className=' py-[30px]  w-[40%] mx-auto '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button onClick={() => {
            setmodal(true)
          }} className='w-[240px]  h-[60px] bg-[#842C68] text-white rounded-[5px] cursor-pointer ' >Add Product</button>
          <div className="hero_logo  w-full  border-none py-[50px] ">
            <img className='w-full' src="/imgs/hero_logo.svg" alt="" />
          </div>

        </div>
        {
          modal && <div className="modal fixed top-0  left-0 w-full h-screen content-center flex items-center justify-center bg-white left-0">
            <div className="box">
              <div className="info text-center w-[500px] pb-[40px] text-[28px] font-bold">
                <h2>Create</h2>
              </div>
              <div className=" px-[40px] py-[60px] shadow w-[500px] h-[450px] bg-[#F2F2F2FF] rounded-[10px] ">
                <form action="" className='flex flex-col gap-[20px]' onSubmit={(e) => {
                  e.preventDefault()
                  const obj = {
                    id: Math.floor(Math.random() * 9999),
                    img: img,
                    title: title,
                    price: price,
                    desc: desc,
                    allInfo: "1. Pre-heat the oven to 200C/3C/gas 5. Place the carrot, leek and tofu in a large bowl. Add the stock and mix well. 2. Add the rest of the ingredients and mix well. 3. Place the mixture in a large bowl",
                    imgs: [
                      " https://m.media-amazon.com/images/I/61Sc48w-WbL._AC_UF1000,1000_QL80_DpWeblab_.jpg", "https://www.bhg.com/thmb/ShnpbVzPBm-0TA97pHaPf_sJxHQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/traditional-yellow-living-room-6b10c925-ad93ac0ddc4e49e4a5b23a44d8085c19.jpg", "https://www.bhg.com/thmb/Vktqjv5zlK5Miw7RUwxONQVdENs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/living-room-blue-couch-c94b6c0c-46bf06b7d34a4a2687730a4679bb3634.jpg",
                      "https://www.bhg.com/thmb/xRP2tOewokAJEi_xzfqy9eAREQs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/teal-colored-living-room-furniture-4ca9cf3d-dcee8ee892ed434e853e15cb1863eb90.jpg"
                    ]
                  }
                  setdata([...data, obj])
                  setimg('')
                  settitle('')
                  setprice('')
                  setdeck('')
                  setmodal(false)
                }} >
                  <div className="input flex items-center gap-[10px]  ">
                    <label className='capitalize w-[40px]' >img:</label>
                    <input required onInput={(e) => {
                      setimg(e.target.value)
                    }} placeholder='Img' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text" />
                  </div>
                  <div className="input flex items-center gap-[10px]  ">
                    <label className='capitalize w-[40px]' >title:</label>
                    <input required onInput={(e) => {
                      settitle(e.target.value)
                    }} placeholder='Title' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text" />
                  </div>
                  <div className="input flex items-center gap-[10px]  ">
                    <label className='capitalize w-[40px]' >price:</label>
                    <input required onInput={(e) => {
                      setprice(e.target.value)
                    }} placeholder='Price' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px]' type="number" />
                  </div>
                  <div className="input flex items-center gap-[10px]  ">
                    <label className='capitalize w-[40px]' >desc:</label>
                    <input required onInput={(e) => {
                      setdeck(e.target.value)
                    }} placeholder='Desc' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text" />
                  </div>
                  <div className="btn pt-[40px] flex items-center justify-between " >
                  <button  onClick={()=>{
                    setmodal(false)
                  }} className=' transition-all duration-300 ease-in-out  border w-[150px]  h-[40px]  cursor-pointer rounded-[5px] text-gray-600 text-center hover:bg-red-600 hover:text-white ' type='button' >Cancel</button>
                    <button type='submit' onClick={() => {

                    }} className=' transition-all duration-300 ease-in-out border w-[150px]  h-[40px] cursor-pointer rounded-[5px] text-gray-600 text-center hover:bg-green-600 hover:text-white ' >Add</button>
                    
                  </div>

                </form>
              </div>
            </div>
          </div>
        }
      </div>

    </>
  )
}

export default Herohomesections
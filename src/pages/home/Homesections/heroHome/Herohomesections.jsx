import React, { useState } from 'react'

function Herohomesections() {
  const [modal,setmodal]=useState(false)
  return (
    <>
      <div className="hero  bg-[#F2F2F2]   ">
        <div className="container  text-center w-[1200px] mx-auto pt-[50px] ">
          <h2 className=' text-[48px] text-[#000000] font-medium '>Your Best Value Products</h2>
          <p className=' py-[30px]  w-[40%] mx-auto '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button onClick={() =>{
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
              <form action=""className='flex flex-col gap-[20px]' >
                <div  className="input flex items-center gap-[10px]  ">
                  <label className='capitalize w-[40px]' >img:</label>
                  <input placeholder='Img' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text" />
                </div>
                <div  className="input flex items-center gap-[10px]  ">
                  <label className='capitalize w-[40px]' >title:</label>
                  <input placeholder='Title' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text"  />
                </div>
                <div  className="input flex items-center gap-[10px]  ">
                  <label className='capitalize w-[40px]' >price:</label>
                  <input placeholder='Price' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px]' type="number" />
                </div>
                <div  className="input flex items-center gap-[10px]  ">
                  <label className='capitalize w-[40px]' >desc:</label>
                  <input placeholder='Desc' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text"  />
                </div>
               <div className="btn pt-[40px] " >
                <button type='button' onClick={()=>{
                  setmodal(false)
                }} className='border w-[150px]  h-[40px] cursor-pointer rounded-[5px] text-gray-600 text-center ' >Add</button>
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
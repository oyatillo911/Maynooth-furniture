import React from 'react'
import { useParams } from 'react-router-dom'

function Detail({data}) {
  const {id} = useParams()
  const filterInfo =data.find((item) =>{
    return item.id == id
  })
  return (
    <>
      <section>
        <div className="container mx-auto w-[1200px] pb-[105px] ">
          <div className="info pt-[80px] pb-[45px] ">
            <h2 className='font-bold  text-[16px]  text-[#000000]' >{filterInfo.title} </h2>
          </div>
          <div className="box flex items-start justify-between">
            <div className="logo flex flex-col gap-[20px] w-[730px]">
              <div className="main_img w-[730px] h-[408px]">
                <img className='w-full h-full ' src={filterInfo.img} alt="" />
              </div>
              <div className="multi flex items-center w-[730px] justify-between ">
                <div className="multi_img h-[159px] w-[21%] cursor-pointer ">
                  <img className='w-full h-full ' src={filterInfo.oneMulti} alt="" />
                </div>
                <div className="multi_img h-[159px] w-[21%] cursor-pointer ">
                  <img className='w-full h-full ' src={filterInfo.twoMulti} alt="" />
                </div>
                <div className="multi_img h-[159px] w-[21%] cursor-pointer ">
                  <img className='w-full h-full ' src={filterInfo.threeMulti} alt="" />
                </div>
                <div className="multi_img w-[21%] h-[159px] cursor-pointer ">
                  <img className='w-full h-full ' src={filterInfo.fourMulti} alt="" />
                </div>
              </div>
            </div>
            <div className="info w-[430px]">
              <div className="price flex items-center justify-between pb-[20px] ">
                <p className=' text-[14px] text-[#000000] font-normal w-[85%] ' >Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</p>
                <span className=' text-[#842C68] text-[20px] font-bold ' >${filterInfo.price}</span>
              </div>
              <hr className=' border-[#999999] ' />
              <div className="btn pt-[30px] pb-[20px] px-[15px] flex items-center justify-between ">
                <button className=' bg-[#E5E5E5] w-[110px] h-[37px] cursor-pointer ' ><span className=' uppercase text-[14px] font-bold text-[#000000] ' >Description</span></button>
                <span className=' uppercase text-[14px] font-bold text-[#000000] ' >Dimensions</span>
                <span className=' uppercase text-[14px] font-bold text-[#000000] ' >Details</span>
              </div>
              <div className="info mb-[20px] h-[212px]">
                <p className=' text-[11.8px] capitalize font-normal text-[#000000]  ' >{filterInfo.allInfo}</p>
              </div>
              <hr className='border-[#999999]' />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Detail
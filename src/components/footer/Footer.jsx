import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-[#000000]'>
        <div className="container w-[1200px] mx-auto px-[60px] py-[38px] flex items-center gap-[110px] ">
          <ul className='flex items-center gap-[65px]'>
            <li><a className='  text-[#FFFFFF] text-[14px] font-bold ' href="">Living Room</a></li>
            <li><a className='  text-[#FFFFFF] text-[14px] font-bold ' href="">Bedroom</a></li>
            <li><a className='  text-[#FFFFFF] text-[14px] font-bold ' href="">Kitchen & Dining</a></li>
          </ul>
          <div className="footer_logo">
<img src="/imgs/footer_logo.svg" alt="" />
          </div>
          <ul className='flex items-center gap-[65px]'>
            <li><a className='text-[#FFFFFF] text-[14px] font-bold ' href="">About</a></li>
            <li><a className='text-[#FFFFFF] text-[14px] font-bold ' href="">Blog</a></li>
            <li><a className='text-[#FFFFFF] text-[14px] font-bold ' href="">Support</a></li>
          </ul>
        </div>
      </footer>

    </>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

function Homesection({ data }) {
    return (
        <>
            <section>
                <div className="container  w-[1200px] mx-auto ">
                    <div className="one_box flex items-center  flex-wrap  py-[70px] gap-[48px] ">
                        {
                            data.map((item, i) => {
                                return <Link to={`/detail/${item.id}`} className="one_cards w-[22%] border-b pb-[25px]  " key={i}>
                                    <div className="logo">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="one_info">
                                        <div className="info  flex items-center justify-between py-[10px] ">
                                            <h2 className='  text-[18px] font-normal text-[#000000] ' >{item.title}</h2>
                                            <span className=' font-bold  text-[#842C68]  text-[22px]'>${item.price}</span>
                                        </div>
                                        <h2 className='font-bold text-[16px] text-[#000000] ' >{item.desc}</h2>
                                        <div className="stars flex items-cennter gap-[2px] py-[12px] ">
                                            <div className="star flex items-center gap-0">
                                                <img src="/imgs/one_stars.svg" alt="" />
                                                <img src="/imgs/one_stars.svg" alt="" />
                                                <img src="/imgs/one_stars.svg" alt="" />
                                                <img src="/imgs/one_stars.svg" alt="" />
                                                <img src="/imgs/one_stars_outline.svg" alt="" />
                                            </div>
                                            <span className='font-normal  text-[12px] text-[#535353]' >(267)</span>
                                        </div>
                                        <div className="btn  flex items-center justify-center  ">
                                            <button className='border  border-[#000000] w-[150px] h-[30px] text-[#000000] bg-[#E5E5E5] cursor-pointer ' >Choose options</button>
                                        </div>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Homesection
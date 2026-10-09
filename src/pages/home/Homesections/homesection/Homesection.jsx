import React from 'react'
import { FaTrash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Homesection({ data, setdata }) {
    return (
        <>
            <section>
                <div className="container  w-[1200px] mx-auto ">
                    <div className="one_box flex items-center  flex-wrap  py-[70px] gap-[48px] ">
                        {
                            data?.map((item, i) => {
                                return <div className="one_cards w-[22%] border-b pb-[25px]  " key={i}>
                                    <div className="logo w-full h-[147px]  ">
                                        <img className='w-full h-full object-fit ' src={item.img} alt="" />
                                    </div>
                                    <div className="one_info">
                                        <div className="info  flex items-center justify-between py-[10px] ">
                                            <h2 className=' capitalize text-[18px] font-normal text-[#000000] ' >{item.title}</h2>
                                            <span className=' font-bold  text-[#842C68]  text-[22px]'>${item.price}</span>
                                        </div>
                                        <h2 className='font-bold text-[16px] text-[#000000] ' >{item.desc}</h2>
                                        <div className="stars  py-[12px] flex items-center justify-between ">

                                            <div className="div flex items-center gap-[2px]">
                                                <div className="star flex items-center gap-0">
                                                    <img src="/imgs/one_stars.svg" alt="" />
                                                    <img src="/imgs/one_stars.svg" alt="" />
                                                    <img src="/imgs/one_stars.svg" alt="" />
                                                    <img src="/imgs/one_stars.svg" alt="" />
                                                    <img src="/imgs/one_stars_outline.svg" alt="" />
                                                </div>
                                                <span className='font-normal  text-[12px] text-[#535353]' >(267)</span>
                                            </div>
                                            <div className="div pb-[15px]">
                                                <FaTrash onClick={() => {
                                                    const newData = data.filter((info) => {
                                                        return info.id !== item.id
                                                    })
                                                    setdata(newData)
                                                }} className='cursor-pointer text-[16px] transition-all duration-300 ease-in-out hover:text-[red] ' />

                                            </div>
                                        </div>
                                        <div className="btn  flex items-center justify-center w-full h-[30px]  ">
                                            <Link to={`/detail/${item.id}`} className='border  border-[#000000] w-[150px] h-full text-[#000000] bg-[#E5E5E5] cursor-pointer flex items-center justify-center  ' >Choose options</Link>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Homesection
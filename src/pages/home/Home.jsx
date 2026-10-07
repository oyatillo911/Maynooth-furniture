import React from 'react'
import Herohomesections from './Homesections/heroHome/Herohomesections'
import Homesection from './Homesections/homesection/Homesection'

function Home( {data, setdata}) {
  return (
    <>
    <Herohomesections data={data}  setdata={setdata} />
    <Homesection data={data} setdata={setdata}  />
    
    
    </>
  )
}

export default Home
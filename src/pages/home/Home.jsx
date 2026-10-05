import React from 'react'
import Herohomesections from './Homesections/heroHome/Herohomesections'
import Homesection from './Homesections/homesection/Homesection'

function Home( {data}) {
  return (
    <>
    <Herohomesections/>
    <Homesection data={data} />
    
    
    </>
  )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
// import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import GenerateBtn from '../components/GenerateBtn'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      {/* <Testimonial/> */}
      <GenerateBtn/>
              
    </div>
  )
}

export default Home

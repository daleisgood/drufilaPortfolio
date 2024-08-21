import React from 'react'
import AboutDetails from '../components/AboutDetails'
import AboutPicture from '../components/AboutPicture'
const AboutPage = () => {
  return (
    <section id='about' className='w-screen' >
      <div className='grid grid-cols-1 gap-y-8 p-8 container h-full mx-auto items-center
      md:grid-cols-2 md:gap-x-16
      lg:p-[100px]'>
        <div className='order-2 md:order-1'>
          <AboutDetails />
        </div>
        <div className='order-1 md:order-2'>
          <AboutPicture  />
        </div>
      </div>
    </section>
  )
}

export default AboutPage
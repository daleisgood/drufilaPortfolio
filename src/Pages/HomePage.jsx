import React from 'react'
import DisplayPicture from '../components/DisplayPicture';
import InfoDetails from '../components/InfoDetails';


const HomePage = () => {
    return (
        <section className='w-screen  h-screen max-h-[800px]' id='home'>
            <div className=' h-full container mx-auto p-8 relative flex flex-col  items-center
            md:flex-row md:items-center
            lg:py-[20px] lg:px-[100px]  '>
                <DisplayPicture />
                <InfoDetails />
            </div>


        </section>
    )
}

export default HomePage
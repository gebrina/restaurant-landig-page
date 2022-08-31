import React from 'react'
import { Helmet } from 'react-helmet-async'
import Home from '../home/Home';
import fast1 from '../../assets/foods/breakfast/fast1.png';
import fast2 from '../../assets/foods/breakfast/fast2.png';
import fast3 from '../../assets/foods/breakfast/fast3.png';
import fast4 from '../../assets/foods/breakfast/fast4.png';
import fast5 from '../../assets/foods/breakfast/fast5.png';
const Food = () => {

  return (
    <>
    <Helmet>
      <title>Our Delicious Foods</title>
      <meta name="description" content="Burger Pizza"/>
    </Helmet>
      <Home/>
      <section>
        <div className='w-1/2 flex 
        flex-col gap-8
        bg-transparent
         md:flex-row
        rounded absolute top-40 
        right-4  bg-white'>
         <img  className='h-32 rounded-lg
          shadow-orange-400
          animate-pulse
         ' src={fast1}  alt={"Breakfast"} />
         <img   className='h-32
         rounded-lg
         shadow-orange-400
         animate-bounce
         'src={fast1} />
         <img   className='h-32
         rounded-lg
         shadow-orange-400
         animate-pulse
         'src={fast1} />
       
        </div>
      </section>
      </>
  )
}

export default Food
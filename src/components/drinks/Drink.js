import React from 'react'
import { Helmet } from 'react-helmet-async';
import Home from '../home/Home';
const Drink = () => {
  return (
      <>
      <Helmet>
        <title>Drinks</title>
       <meta name="description" content="Those delecious drinks are delicious"/>
      </Helmet>
      <Home/>
      <div className='bg-transparent h-3/4 
      top-24 
      rounded-lg w-1/2 right-0 absolute'>
         <h1 className='bg-transparent
          text-white
          font-bold
          text-6xl
          border
          p-2
          animate-bounce
          rounded
          shadow-lg
          shadow-gray-900
          uppercase
          text-center

         '>Beautifull Drinks...</h1>
      </div>
      </>
  )
}

export default Drink;
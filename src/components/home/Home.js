import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import child from '../../assets/img/child.jpg';
import flower from '../../assets/img/flower.png';
import love from '../../assets/img/love.jpg';
import japan from '../../assets/img/japan.jpg';
const Home = ({aboutFoodss,welcomeTexts}) =>{
   const [bgs,setBgs] = useState(child);
   const [allBgs,setAllBgs] = useState([child,flower,japan,love])
   const [welcomeText,steWelcomeText] = useState("Welcome to the Restaurnat");
   const [aboutFoods,setAboutFoods] = useState("Where You Find Delicious Foods and Drinks..")
   useEffect(  ()=>{
     const selectBgs = async ()=>{
       let counter = 0;
      setInterval(()=>{
        counter +=1;
         if(counter>=allBgs.length){
          counter = 0
         }
        setBgs(allBgs[counter])
       },3000)
     }
     selectBgs()
   },[])
   return <main
   style={{
    backgroundImage:`url(${bgs})`
   }}
   className="h-screen bg-no-repeat bg-cover bg-top ">
     <header className="container bg-gray-900 opacity-75 justify-between 
     items-start
     font-bold
     uppercase
     rounded-lg
     shadow-lg
     shadow-gray-200
     font-serif
     px-2
     text-xl sm:items-center 
     flex h-1/3
      sm:h-14 mx-auto fixed
     sm:left-10
     ">
      <div><h1 className='text-2xl  text-white'>Logo</h1></div>
      <div>
        <ul className='flex-col flex gap-4 sm:gap-20 sm:flex-row'>
          <li className='text-white transition-all rounded hover:text-gray-700 hover:bg-white px-2'><NavLink to="/">Home</NavLink></li>
          <li className='text-white  transition-all rounded hover:text-gray-700 hover:bg-white px-2'><NavLink to="/foods">Foods</NavLink></li>
          <li className='text-white  transition-all rounded hover:text-gray-700 hover:bg-white px-2'><NavLink to="/drinks">Drinks</NavLink></li>
          <li className='text-white  transition-all rounded hover:text-gray-700 hover:bg-white px-2'><NavLink to="/book-now">Book</NavLink></li>
        </ul>
      </div>
     </header>
    <div className='absolute hover:shadow-md transition-all bg-black opacity-75 rounded-lg h-40 p-4 text-white left-10 shadow-lg shadow-red-500 top-1/2'>
    <h1 className='text-4xl font-serif shadow-lg'>{welcomeText}</h1>
     <p className="text-2xl">{aboutFoods}</p>
    </div>
   </main>
}

export default Home;
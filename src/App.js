import {Routes,Route} from 'react-router-dom';
import Drink from './components/drinks/Drink';
import Food from './components/foods/Food';
import Home from './components/home/Home';
import Books from './components/book/Book';
const App = ()=>{
   return <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/drinks' element={<Drink/>}/>
      <Route path='/foods' element={<Food/>}/>
      <Route path='/book-now' element={<Books/>}/>
   </Routes>
}

export default App;
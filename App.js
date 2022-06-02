import React, {useState, useEffect, useRef} from 'react'
import './App.css';
import { BrowserRouter as Router, Routes,Route, NavLink } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Manifesto from './Components/Manifesto';
import RouteMap from './Components/RouteMap';
import Art from './Components/Art';
import Team from './Components/Team';
import Sanctuary from './Components/Sanctuary';
import FoundersMessage from './Components/FoundersMessage';
import TypewriterComponent from 'typewriter-effect';
import RouteMap2 from './RouteMap2';
import WebFont from 'webfontloader';
import RouteMap3 from './RouteMap3';

const logo = require('./logo.jpg')


function App() {
   const[loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, [])
  
  return (
  <>
    {loading === false ? (
 <Router>
         <Header />
      <Routes>
       
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/vision' element={<Sanctuary />}></Route>
        <Route path='/manifesto' element={<Manifesto />}></Route>
        
        <Route path='/dreamMap' element={<RouteMap2 />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/art' element={<Art />} ></Route>

      </Routes>
   
    </Router>
    ) : (
      <LoadingPage/>
    )}

   
    </>
  );
}

const LoadingPage = () => {
  return(
    <div className='loadingPage'>
      <img className='logoImage' src={logo} />
      <TypewriterComponent 
      
      options={{
       
        autoStart:true,
        loop:true
        
      }}
      onInit={(typewriter) => {
        typewriter.typeString('Hello World!')
        .pauseFor(800)
        .deleteAll(10)
        .typeString('Bye Bye')

        .deleteAll(50)
        .start()
      } }
      
      
      />
    </div>
  )
}
export default App;

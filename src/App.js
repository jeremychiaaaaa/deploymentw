import React, {useState, useRef} from 'react'
import './App.css';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import {Header} from './Components/Header'
import HomePage from './Components/HomePage';



import NewArt from './Components/NewArt';
import Team from './Components/Team';
import Sanctuary from './Components/SanctuaryPage/Sanctuary';


import ManifestoV2 from './Components/ManifestoV2';
import DreamMap from './Components/DreamMap';
const faceOff = require('./Components/Epic_Dramatic_Full_No_Vocals-AudioTrimmer.com.mp3')

export const HeaderContext = React.createContext()
function App() {

const audio = useRef(new Audio(faceOff))
  const [phoneClicked, setPhoneClicked] = useState(false)
  const[musicPlay,setMusicPlay] = useState(false)
  const [stickyHeader,setStickyHeader] = useState(false)



  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>KYN</title>
                <link rel="canonical" href="http://mysite.com/example" />
           
            </Helmet>
   
  <HeaderContext.Provider value={{phoneClicked,setPhoneClicked,musicPlay,setMusicPlay,stickyHeader,setStickyHeader, }}>
    
 <Router>
         <Header ref={audio} />
      <Routes>
       
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/vision' element={<Sanctuary />}></Route>
        <Route path='/manifesto' element={<ManifestoV2 ref={audio} />}></Route>
        
        <Route path='/dreamMap' element={<DreamMap />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/art' element={<NewArt />} ></Route>

      </Routes>
   
    </Router>
     

   
    </HeaderContext.Provider> </>
  );
}


export default App;

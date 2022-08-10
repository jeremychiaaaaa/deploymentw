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
const faceOff = require('./Components/Hustle-Harder-Borrtex-AudioTrimm.mp3')

const sanctuaryMusic = require('./Components/Cinematic-Nature-Ocean-Waves-Spl.mp3')


export const HeaderContext = React.createContext()
function App() {

const audio = useRef(new Audio(faceOff))
const sanctuaryAudio = useRef(new Audio(sanctuaryMusic))
const ref= useRef({audio, sanctuaryAudio})
  const [phoneClicked, setPhoneClicked] = useState(false)
  const[musicPlay,setMusicPlay] = useState(false)
  const [stickyHeader,setStickyHeader] = useState(false)

  {/*loading of dreammap avatars */}

  const [loadAvatars,setLoadAvatars] = useState(false)



const[sanctuaryMusicStart,setSanctuaryMusicStart] = useState(false)

  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>KYN</title>
                <link rel="canonical" href="http://mysite.com/example" />
           
            </Helmet>
   
  <HeaderContext.Provider value={{phoneClicked,setPhoneClicked,musicPlay,setMusicPlay,stickyHeader,setStickyHeader,
    sanctuaryMusicStart,setSanctuaryMusicStart,
    loadAvatars,setLoadAvatars }}>
    
 <Router>
         <Header ref={ref}/>
      <Routes>
       
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/sanctuary' element={<Sanctuary />}></Route>
        <Route path='/manifesto' element={<ManifestoV2 ref={audio} />}></Route>
        
        <Route path='/dreammap' element={<DreamMap />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/art' element={<NewArt />} ></Route>

      </Routes>
   
    </Router>
     

   
    </HeaderContext.Provider> </>
  );
}


export default App;

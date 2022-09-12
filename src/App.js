import React, {useState, useRef} from 'react'
import "@stripe/stripe-js"
import './App.css';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Routes,Route, Outlet,  } from 'react-router-dom';
import {Header} from './Components/Header'
import HomePage from './Components/HomePage';
import {CheckOutSuccess} from './Components/Merch/CheckOutSuccess';
import MerchLandingPage from './Components/Merch/MerchLandingPage';

import NewArt from './Components/NewArt';
import Team from './Components/Team';
import Sanctuary from './Components/SanctuaryPage/Sanctuary';
import { MerchProductScreen } from './Components/Merch/MerchProductScreen';

import ManifestoV2 from './Components/ManifestoV2';
import DreamMap from './Components/DreamMap';
import CheckOutOne from './Components/Merch/CheckOutOne';
const faceOff = require('./General Assets/Hustle-Harder-Softened-AudioTrim.mp3')

const sanctuaryMusic = require('./General Assets/Ambient-Waves-softened.mp3')


export const HeaderContext = React.createContext()
function App() {

const audio = useRef(new Audio(faceOff))
const sanctuaryAudio = useRef(new Audio(sanctuaryMusic))
const ref= useRef({audio, sanctuaryAudio})
  const [phoneClicked, setPhoneClicked] = useState(false)
  const[musicPlay,setMusicPlay] = useState(false)
  const [stickyHeader,setStickyHeader] = useState(false)
  const [productChoose, setProductChoose] = useState(false)
  const [productName,setProductName] = useState('')
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
    loadAvatars,setLoadAvatars,
    productChoose,setProductChoose,
    productName,setProductName
    
    }}>
    
 <Router>
         <Header ref={ref}/>
      <Routes>
       
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/sanctuary' element={<Sanctuary />}></Route>
        <Route path='/manifesto' element={<ManifestoV2 ref={audio} />}></Route>
        
        <Route path='/dreammap' element={<DreamMap />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/art' element={<NewArt />} ></Route>
            <Route path='/checkout-success' element={<CheckOutSuccess />} />
        <Route path='/merch' element={<MerchLandingPage/>} />
        <Route path='/merch/Collection-2' element={<MerchProductScreen />} />
          <Route path='/merch/Collection-1' element={<MerchProductScreen />} />
          <Route path='/merch/checkout' element={<CheckOutOne />} />
      
        
      </Routes>
   
    </Router>
     

   
    </HeaderContext.Provider> </>
  );
}


export default App;

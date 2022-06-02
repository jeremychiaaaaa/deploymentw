import React, {useState, useRef, useContext,useEffect} from 'react'
import Sanctuary from './Sanctuary.js'
import RouteMap from './RouteMap.js'
import Manifesto from './Manifesto.js'
import Team from './Team.js'
import Art from './Art.js'
import HomePage from './HomePage.js'
import FoundersMessage from './FoundersMessage.js'
import '../App.css'
import { AudioContext } from '../App.js'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
const faceOff = require('./Face-Off- (1) (2).mp3')
const logo = require('../logo1.jpg')

function Header() {
 const audio = useRef(new Audio(faceOff))
    
    const [click, setClick] = useState(false)
    const[music, setMusic] = useState(false)
    const[dropDownButton, setDropDownButton] = useState(false)
     const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    
    const handleClick = () => {
        setClick(!click)
        setMusic(false)
      audio.current.pause()
        audio.current.currentTime=0
    }
 
    const manifestoClick = () => {
        setMusic(true)
        setClick(!click)
       
        audio.current.play()
       
        
    }
    useEffect(() => {
        window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
      
       
       }, [])
  return (
   <div className={phone ? click ? 'phone-active-header' : 'phone-header' : 'header'}>
       <div className='logo'>
       <NavLink to='/' style={({isActive}) => isActive ? {
               textDecoration:"underline"} : {color: '#545e6f', background: 'white'}
           } onClick={handleClick} ><img className='headerLogo' src={logo}></img></NavLink>
         
       </div>
       
       <div className='navBar'>
        
           <div className={click ? 'navigation-bar active' :'navigation-bar'}>
           <NavLink to='/art' style={({isActive}) => isActive ? {
               textDecoration:"underline"} : {color: '#545e6f', background: 'white'}
           } onClick={handleClick} ><span className="tabs">ART</span></NavLink>
           <div onClick={() => setDropDownButton(!dropDownButton)} className={dropDownButton ? 'dropdown-active' : 'dropdown'}>
           <NavLink to='/manifesto' style={({isActive}) => isActive ? {
               textDecoration:"underline"} : {color: '#545e6f', background: 'white'}
           } onClick={manifestoClick}><span className="tabs">MANIFESTO</span></NavLink>
           

           
           
           
           
           
           </div>
           <NavLink to='/vision' style={({isActive}) => isActive ? {
              textDecoration:"underline"} : {color: '#545e6f', background: 'white'}
           } onClick={handleClick}><span className="tabs">SANCTUARY</span></NavLink>
           <NavLink to='/dreamMap' style={({isActive}) => isActive ? {
              textDecoration:"underline"} : {color: '#545e6f', background: 'white'}
           } onClick={handleClick}><span className="tabs" >DREAM MAP</span></NavLink>
           <NavLink to='/team' style={({isActive}) => isActive ? {
             textDecoration:"underline"} : {color: '#545e6f', background: 'white'}
           } onClick={handleClick}><span className="tabs">TEAM</span></NavLink>
         
           </div>
        </div>
       <div className={click ? 'media active' : 'media'}>
          
           <div className='media-svg'>
            <span class='icon-twitter'></span>
      </div>
       <div className='media-svg'>
            <span class='icon-discord'></span>
           </div>
      <div className='media-svg'>
            <span class='icon-opensea'></span>
       </div>     
       </div>
    
         <div className="hamburger-button" onClick={handleClick}>
                <i className={click ? "fas fa-times": "fas fa-bars"}></i>
               </div>
   </div>

  )
}

export default Header

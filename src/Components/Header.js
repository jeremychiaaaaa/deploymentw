import React, {useState, useRef, useContext,useEffect, forwardRef} from 'react'
import Sanctuary from './SanctuaryPage/Sanctuary.js'


import Team from './Team.js'

import NewArt from './NewArt.js'
import HomePage from './HomePage.js'

import '../App.css'
import { AudioContext } from '../App.js'
import { HeaderContext } from '../App.js'
import WebFont from 'webfontloader';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
const faceOff = require('./Epic_Dramatic_Full_No_Vocals-AudioTrimmer.com.mp3')


export const Header = React.forwardRef((props,ref) => {
 const audio = useRef(new Audio(faceOff))
 let style={
    fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis',marginLeft:'10px'
  }
  let phoneStyle={
    fontWeight:200, fontSize:'1.1rem',fontFamily:'Dosis',marginLeft:'10px'
  }
  let phoneSubHead = {
    fontWeight:900, fontSize:'2rem',fontFamily:'Bree Serif',position:'relative', marginLeft:'10px'
  }
  let phoneSubHeaderStyle = {
    fontFamily:'Bree Serif', fontSize:'2.2rem', fontWeight:700, color:'white',marginLeft:'25px', marginBottom:'20px'
  }
  let subHeaderStyle = {
    fontFamily:'Bree Serif', fontSize:'4.6rem', fontWeight:700, color:'white',marginLeft:'29px'
  }
  let subHead = {
    fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',
  }
  let borderStyle = {
   borderBottomWidth: '1px', width:'100%', marginLeft:'20px',borderBottomColor:'beige', paddingBottom:'10px'
  }
  let a = {
    opacity:1
  }
  const[sticky,setSticky] = useState({
    position:'sticky',backgroundColor:'white'

  })
    const [click, setClick] = useState(false)
    const[music, setMusic] = useState(false)
    const[dropDownButton, setDropDownButton] = useState(false)
     const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    const context = useContext(HeaderContext)
    console.log(context.music)
    const handleClick = () => {
        if(phone){
              context.setPhoneClicked(!context.phoneClicked)
              setClick(!click)
        
        }
      context.setStickyHeader(false)
      context.setMusicPlay(false)
       console.log(click) 
        ref.current.pause()
        ref.current.currentTime = 0
    } 
    const sanctuaryClick = () => {
      if(phone){
            context.setPhoneClicked(!context.phoneClicked)
            setClick(!click)
      }
    context.setStickyHeader(true)
    context.setMusicPlay(false)
     console.log(context.stickyHeader) 
      ref.current.pause()
      ref.current.currentTime = 0
  } 

    const manifestoClick = () => {
        if(phone){
            context.setPhoneClicked(!context.phoneClicked)
      }
        setMusic(true)
        setClick(!click)
        context.setMusicPlay(true)
        ref.current.play()
 

        
    }
    useEffect(() => {
        window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
       WebFont.load({
            google: {
              families: ['Droid Sans', 'Chilanka','Roboto Condensed', 'Smooch Sans', 'Oswald','PT Sans Narrow','Bree Serif', "Exo", 'Patua One', 'Teko', 'Cuprum', 'Share', 'Jockey One','Dosis','Bellota Text']
            }
          });
        function scroll(e){
          let pos = window.scrollY
          console.log(pos)
            if(pos > 0 && context.stickyHeader ===  true){
              setSticky({position:'fixed',backgroundColor:'white',top:0})
            } 
        }
          window.addEventListener('scroll', scroll)
   
            return () => window.removeEventListener("scroll", scroll)
       

       }, [context.stickyHeader])
  return (
   <div className={phone ? click ? 'phone-active-header' : 'phone-header' : 'header'} style={sticky}>

       <div className='logo'>
       <NavLink to='/' style={({isActive}) => isActive ? {
             } : {color: 'black',fontSize:'0.9rem',letterSpacing:'0.1rem',fontFamily:'Bellota Text',padding:'10px'}
           } onClick={handleClick} ><span style={{color: 'black',fontSize:'2.1rem',letterSpacing:'0rem',fontFamily:'Bellota Text',alignSelf:'center',padding:'10px',opacity:0.8}} >KYN</span></NavLink>
         
       </div>
       
       <div className='navBar'>
        
           <div className={click ? 'navigation-bar active' :'navigation-bar'} >
               <div  style={phone ? borderStyle :a }>
                     <NavLink to='/art' style={ phone ? phoneSubHead : ({isActive}) => isActive ? {
              textDecoration:"underline"} : {color: 'black',fontSize:'0.9rem',letterSpacing:'0.1rem'}
           }  onClick={handleClick} ><span className={!phone && "tabs"}>ART</span></NavLink>
               </div>
               <div style={phone ? borderStyle :a }>
           <div onClick={() => setDropDownButton(!dropDownButton)} className={dropDownButton ? 'dropdown-active' : 'dropdown'}>
           <NavLink to='/manifesto' style={ phone ? phoneSubHead : ({isActive}) => isActive ? {
              textDecoration:"underline"} : {color: 'black',fontSize:'0.9rem',letterSpacing:'0.1rem'}
           }  onClick={manifestoClick}><span className={!phone && "tabs"}>MANIFESTO</span></NavLink>
           

           
           
           
           
           
           </div>
           </div>
           <div  style={phone ? borderStyle :a }>
           <NavLink to='/vision' style={ phone ? phoneSubHead : ({isActive}) => isActive ? {
              textDecoration:"underline"} : {color: 'black',fontSize:'0.9rem',letterSpacing:'0.1rem'}
           }  onClick={sanctuaryClick}><span className={!phone && "tabs"}>SANCTUARY</span></NavLink></div>
               <div  style={phone ? borderStyle :a }>
           <NavLink to='/dreamMap' style={ phone ? phoneSubHead : ({isActive}) => isActive ? {
              textDecoration:"underline"} : {color: 'black',fontSize:'0.9rem',letterSpacing:'0.1rem' }
           } onClick={handleClick}><span className={!phone && "tabs"} >DREAM MAP</span></NavLink></div>
            <div  style={phone ? borderStyle :a }>
           <NavLink to='/team' style={ phone ? phoneSubHead : ({isActive}) => isActive ? {
              textDecoration:"underline"} : {color: 'black',fontSize:'0.9rem',letterSpacing:'0.1rem' }
           }  onClick={handleClick}><span className={!phone && "tabs"}>TEAM</span></NavLink>
   
           </div>
        {context.phoneClicked && 
        <>
                <div style={{display:'flex', flexDirection:'column', borderBottomWidth: '1px', width:'100%', marginLeft:'20px', borderBottomColor:'beige', paddingBottom:10}}>
        <div style={{display:'flex', alignItems:'center',}}>
            <a ><span style={phoneSubHead}>TWITTER</span></a>
            <div className='media-svg' style={{position:'absolute',right:0, marginRight:20}}>
            <span class='icon-twitter'></span>
      </div>
            </div>
     </div>
     <div style={{display:'flex', flexDirection:'column', borderBottomWidth: '1px', width:'100%', marginLeft:'20px', borderBottomColor:'beige', paddingBottom:10}}>
        <div style={{display:'flex', alignItems:'center',}}>
            <a ><span style={phoneSubHead}>DISCORD</span></a>
            <div className='media-svg' style={{position:'absolute',right:0, marginRight:20}}>
            <span class='icon-discord'></span>
      </div>
            </div>
     </div>
     <div style={{display:'flex', flexDirection:'column', borderBottomWidth: '1px', width:'100%', marginLeft:'20px', borderBottomColor:'beige', paddingBottom:10}}>
        <div style={{display:'flex', alignItems:'center',}}>
            <a ><span style={phoneSubHead}>OPENSEA</span></a>
            <div className='media-svg' style={{position:'absolute',right:0, marginRight:20}}>
            <span class='icon-opensea'></span>
      </div>
            </div>
     </div>
        </>

        
        }       <div className={click ? 'media active' : 'media'}>
          
           <div className='media-svg'>
        <a target="_blank" href='https://twitter.com/TheKynMovement'><span class='icon-twitter'></span></a>    
      </div>
       <div className='media-svg'>
            <span class='icon-discord'></span>
           </div>
      <div className='media-svg'>
            <span class='icon-opensea'></span>
       </div>     
           </div>
          
       </div>
     
        </div>
 

       
     
    
         <div className="hamburger-button" onClick={handleClick}>
                <i className={click ? "fas fa-times": "fas fa-bars"}></i>
               </div>
   </div>

  )
}
)


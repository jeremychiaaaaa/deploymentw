import React,{useEffect,useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import WebFont from 'webfontloader';
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), MoveOut(0, -200), Sticky());
const cloud1 = require('../cloud1.png')
const cloud2 = require('../cloud2.png')
const cloud3 = require('../cloud3.png')
const cloud4 = require('../cloud4.png')
const cloud5 = require('../cloud5.png')

function Sanctuary() {
  let stylee={
    fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis',marginLeft:'10px'
  }
  let phoneStyle={
    fontWeight:200, fontSize:'1.1rem',fontFamily:'Dosis',marginLeft:'10px'
  }
  let phoneSubHead = {
    fontWeight:900, fontSize:'1.3rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'10px', letterSpacing:4.4, 
  }
  let phoneSubHeaderStyle = {
    fontFamily:'Bree Serif', fontSize:'2.2rem', fontWeight:700, color:'white',marginLeft:'25px', marginBottom:'20px'
  }
  let subHeaderStyle = {
    fontFamily:'Bree Serif', fontSize:'4.6rem', fontWeight:700, color:'white',marginLeft:'29px'
  }
  let subHead = {
    fontWeight:900, fontSize:'1.9rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'10px', 
  }
const[styles,setStyles] = useState({marginBottom:0})
const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
let style={
  position: 'relative',
  fontFamily:'Bree Serif', fontSize:'4.6rem', fontWeight:700, color:'white',marginLeft:'29px'
}
useEffect(() => {
  window.addEventListener('scroll', function(){
    let pos = window.scrollY
    let poss = pos * 2
    console.log(poss)
setStyles({marginBottom:poss})
  })
  WebFont.load({
    google: {
      families: ['Droid Sans', 'Chilanka','Roboto Condensed','Bree Serif', 'Dosis']
    }
  });
  window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
},[])
  return (
 <div style={{height:'100vh'}}>
    <div className='sanctuary' style={{height:! phone && '100%'}}>

      <h2
      style={{...style, marginBottom: `${styles.marginBottom}px`}}
     >SANCTUARY</h2>

      <div className='clouds'>
        <Image  src={cloud1} ></Image>
        <Image1 src={cloud2} ></Image1>
        <Image2 src={cloud3} ></Image2>
        <Image3 src={cloud4} ></Image3>
        <Image4 src={cloud5} ></Image4>
        <Image5 src={cloud1}></Image5>
        <Image6 src={cloud2}></Image6>
        <Image7 src={cloud3} ></Image7>
        <Image8 src={cloud4} ></Image8>
        <Image9 src={cloud5}></Image9>

      </div>
    </div>
    <div className='values'>
    
       <h2 style={subHead}>THE GOAL</h2>
      <span style={stylee}>Real-life sanctuaries for KYNS across the globe</span>
    
     <div>
     <h2 style={subHead}>THE CONCEPT</h2>
      <p style={stylee}>"As terrifying and painful as reality can be, it's also... the only place that... you can get a decent
meal. Because, reality... is real." (James Halliday, Ready Player One, 2018)<br/>
"Metaverse." An exciting word that brings to mind endless possibilities, worlds and realities.<br/>
While we are also thrilled at that thought, we recognise that the technology for a fully
immersive and interoperable metaverse like Ready Player One's will still not be here for many
years to come.<br/>
In the meantime, we choose to focus on reality, because reality is still where we are going to be
spending most of our time.</p>
<h2 style={subHead}>FEASIBILITY AND SUSTAINABILITY</h2>
      <p style={stylee}>Lots of admin, legal, and regulatory frameworks need to be tested and set up to create a
strong foundation. <br />
We will start off with just one villa, and perfect the system. <br/>
Buying and maintaining mega properties is also costly and has to be self-sustainable. <br />
So an Airbnb-like approach for non-Kyns will most likely be adopted. <br />
The recurring revenue will go to maintaining these estates. <br /> 
Verified Kyns will have access to exclusive members-only areas of these estates.<br />
These will be our Sanctuaries within The Sanctuaries.</p>  
<h2 style={subHead}>FRIENDS AND FAMILIES</h2>
      <p style={stylee}>What's a party if we can't enjoy it with our loved ones?<br/>
As far as possible, we will strive to allow verified Kyns + their friends / family to stay for free.<br/>
But whether that can become a reality can only be confirmed through testing different pricing
models when we launch our first villa.<br/>
Sounds like a feat, but normalcy was never meant for us. We are here to make a statement.
#LFG</p>  
     </div>
    </div>
   </div>
  )
}

const cloudFade = keyframes`
  0%{
    opacity:0;
    transform:scale(1);
  }
  25%,75%{
    opacity:1;
  }
  100%{
    opacity:0;
   transform:scale(3);
  }
`
const Image = styled.img`
animation: ${cloudFade} 3s linear infinite;
`
const Image1 = styled.img`
animation: ${cloudFade} 6s linear infinite;
`
const Image2 = styled.img`
animation: ${cloudFade} 9s linear infinite;
`
const Image3 = styled.img`
animation: ${cloudFade} 12s linear infinite;
`
const Image4 = styled.img`
animation: ${cloudFade} 15s linear infinite;
`
const Image5 = styled.img`
animation: ${cloudFade} 30s linear infinite;
`
const Image6 = styled.img`
animation: ${cloudFade} 27s linear infinite;
`
const Image7 = styled.img`
animation: ${cloudFade} 24s linear infinite;
`
const Image8 = styled.img`
animation: ${cloudFade} 21s linear infinite;
`
const Image9 = styled.img`
animation: ${cloudFade} 18s linear infinite;
`



const value = window.scrollY
const textFade = keyframes`
to{
  marginBottom: ${value}*2;
}
`



export default Sanctuary
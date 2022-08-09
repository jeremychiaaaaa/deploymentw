import React,{useEffect,useState} from 'react'

import styled, { keyframes } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import WebFont from 'webfontloader';
import { SanctuaryContent } from './SanctuaryContent';
import PhoneSanctuary from './PhoneSanctuary';

const cloud1 = require('./Clouds/cloud1.png')

const cloud2 = require('./Clouds/cloud2.png')
const cloud3 = require('./Clouds/cloud3.png')
const cloud4 = require('./Clouds/cloud4.png')
const cloud5 = require('./Clouds/cloud5.png')

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

  fontFamily:'Bree Serif', fontSize:'4.6rem', fontWeight:800, color:'black',
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
      families: ['Bree Serif', 'Dosis']
    }
  });
  window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
},[])
  return (
 <div style={{height:'100vh',overflowX:!phone && 'hidden'}}>
    <div className='sanctuary' style={{height:! phone && '100%'}}>
      
    
   
      <h2
      style={{...style, marginBottom: `${styles.marginBottom}px`,fontSize:phone ? '3rem' : '4.6rem',margin:'0 auto',textAlign:'center', transform:'translateY(-16vh)'}}
     >SANCTUARY <br/> <span style={{fontSize:phone ? '1.5rem':'2.3rem'}}>Our Goal: To have multiple <span style={{transform:'translateY(-10%)'}}>sanctuaries across the world</span></span></h2>
   
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
    {phone ? <PhoneSanctuary /> : 

    <div className='values'>
    <SanctuaryContent/>
    </div>
    }

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
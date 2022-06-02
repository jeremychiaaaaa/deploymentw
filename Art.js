import React, {useState,useEffect, useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import WebFont from 'webfontloader';
const image1 = require('../card2.jpg')
const image2 = require('../trial3dd.jpg')
const art1 = require('../art1.jpeg')
const art2 = require('../art2.jpeg')
const art3 = require('../art3.jpeg')
const art4 = require('../art4.jpeg')
const art5 = require('../art5.jpeg')
function Art() {
  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)
  let style={
    fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis',textAlign:'center'
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
    fontFamily:'Bree Serif', fontSize:'4rem', fontWeight:700, color:'black'
  }
  let subHead = {
    fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative',color:'white'
  }
const[openCard, setOpenCard] = useState(-1)
const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
useEffect(() => {
    window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
     WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka','Roboto Condensed', 'Smooch Sans', 'Oswald','PT Sans Narrow','Bree Serif', "Exo", 'Patua One', 'Teko', 'Cuprum', 'Share', 'Jockey One','Dosis']
      }
    });
   
   }, [])

   console.log(openCard)
  return (
    <div style={{height:'100vh'}}>
      <Section>
     <div style={{marginTop:130}}>
    <h1 style={{...subHeaderStyle, textAlign:'center',marginTop:10}}>THE KYN ART COLLECTION</h1>
    <p style={{...style,width:'1020px'}}>From a simple concept to countless drafts over thousands of hours , the KYN art collection
comes to life. The visual manifestation of the KYN brand, these are our champions, our avatars.
We will experience The Sanctuary through them.</p>
<p  style={{...style,width:'1020px',marginTop:10}}>10,000 Avatars, 5 different races : Angels, Demons, Werewolves, Vampires, Humans.</p>
<p  style={{...style,width:'1020px',marginTop:10}}>Your new web3 identity. Your new KYNs. Your new family.</p>

     </div>
     <div style={{width:'100vw', height:70, backgroundColor:'#36454F',marginTop:20,display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',gap:20 }}>
     <span style={subHead}> KYN ART COLLECTION</span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead} > KYN ART COLLECTION</span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
</div>
     <Row direction='none' ref={Row1Ref}>
    
     <ImageItem img={art1} forwardRef={Row1Ref}   />
     <ImageItem img={art2}  forwardRef={Row1Ref} />
     <ImageItem  img={art3}  forwardRef={Row1Ref} />
     <ImageItem  img={art4}  forwardRef={Row1Ref} />
     <ImageItem img={art5}  forwardRef={Row1Ref} />

       </Row>
       <div style={{width:'100vw', height:70, backgroundColor:'#36454F',marginTop:20,display:'flex', flexDirection:'row', justifyContent:'center',alignItems:'center',gap:20 }}>
     <span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead}> KYN ART COLLECTION </span>
<span style={subHead} > KYN ART COLLECTION </span>
<span style={subHead}>KYN ART COLLECTION</span>
<span style={subHead}>KYN ART COLLECTION</span>
<span style={subHead}>KYN ART COLLECTION</span>
</div>
<div>
    <h2 style={{...subHeaderStyle, textAlign:'center',fontSize:'3rem'}}>NFT OR NFTs</h2>
    <p style={{...style,width:'1020px',marginTop:5}}>Who said that NFTs are only exist in 1 form? Personally, we don’t.</p>
<p style={{...style,width:'1020px',marginTop:5}}>Normalcy was never meant for us. Neither is our art.</p>
<p style={{...style,width:'1020px',marginTop:5}}>Depending on the season, some of our avatars have the ability to change form. </p>
<p style={{...style,width:'1020px',marginTop:5}}>The question is who though…?.</p>

     </div>
   </Section>
    </div>
   
  )
}
const ImageItem = ({img,forwardRef}) => {
let play = (e) => {
  forwardRef.current.style.animationPlayState = 'running'
}
let pause = (e) => {
  forwardRef.current.style.animationPlayState = 'paused'
}
  return(
      <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}  >
  <img src={img} />
  
  </ImgContainer>
  )

}
const ImgContainer = styled.div`
width:25rem;
margin:0 0.7rem;
border-radius:20px;

cursor:pointer;
background-color: white;
img{
  width:100%;
  height:auto;
  border-width:1px solid transparent;
}
`
const move = keyframes`
0%{
  transform:translateX(100%)
}
100%{
  transform:translateX(-100%)
}
`
const Section = styled.div`
width:100vw;
height:100%;
display: flex;
align-items: center;
justify-content: center;

flex-direction: column;

background-image: linear-gradient(0deg, rgba(156,189,238,1) 0%, rgba(251,251,251,1) 100%);
`
const Row = styled.div`

white-space: nowrap;
box-sizing: content-box;
margin:2rem 0;
display: flex;
animation : ${move} 10s linear infinite ${props => props.direction};


`
export default Art
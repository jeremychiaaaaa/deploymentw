import React, {useState, useEffect,useContext,useRef} from 'react'

import TextTransition, { presets } from "react-text-transition";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import styled, {keyframes} from 'styled-components'
import WebFont from 'webfontloader';
import { HeaderContext } from '../App';
const faceOff = require('./Epic_Dramatic_Full_No_Vocals-AudioTrimmer.com.mp3')
const muteIcon = require('./mute-icon-2.jpg')


const TEXTS = [
    'kynz of anarchy',
    'rebels',
    'misfits',
    'deviants',
    'action-takers',
    'wide-eyed dreamers',
    'freedom fighters'
]
const place = require('./mainfesto_avatar.png')
export const  ManifestoV2 = React.forwardRef((props,ref) => {
  const[sticky,setSticky] = useState({paddingTop:'0px'})
    const [activeIndex,setActiveIndex] = useState(0)
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    const audio = useRef(new Audio(faceOff))
    const context = useContext(HeaderContext)
    const musicBarRef = useRef(null)
    useEffect(() => {
    window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
    WebFont.load({
      google: {
        families: ['Bree Serif','Dosis']
      }
    });
    if(context.musicPlay === true){
      ref.current.muted=false
      ref.current.play()
    }else{
      ref.current.pause()
    }

   }, [context.musicPlay])
  useEffect(() => {
    const intervalId = setInterval(() =>
      setActiveIndex(index => index + 1),
      680 // every 3 seconds
 
    )
    
 
  },[])

  const manifestoMusicToggle = () => {
    context.setMusicPlay(!context.musicPlay)
      if(context.musicPlay === true){
  
      ref.current.muted=false
      ref.current.play()
    }else {
      ref.current.muted = true
    }
  }
  const BarContainer = ({ forwardRef, }) => {
    let play = (e) => {
      forwardRef.current.style.animationPlayState = 'running'
    }
    let pause = (e) => {
      forwardRef.current.style.animationPlayState = 'paused'
      console.log('paused')
    }
    return(
      <div className='music-bars' onClick={manifestoMusicToggle} >
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
  
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
     <VolumeOffIcon style={{display : context.musicPlay ? 'none' : 'block', color:'black', height:'60px',width:'50px',paddingBottom:'20px',transform:phone ? 'translateX(15%)' : 'translateX(-15%)' }} />
      </div>
   
   )
  }
   let style={
    fontWeight:200, fontSize:'1.2rem',fontFamily:'Dosis',color:'black',
  }
  let phoneStyle={
    fontWeight:200, fontSize:'1.1rem',fontFamily:'Dosis',marginLeft:'10px'
  }
  let phoneSubHead = {
    fontWeight:900, fontSize:'1.3rem',fontFamily:'Bree Serif',position:'relative',color:'white' 
  }
  let phoneSubHeaderStyle = {
    fontFamily:'Bree Serif', fontSize:'2.2rem', fontWeight:700, color:'white',marginLeft:'25px', marginBottom:'20px'
  }
  let subHeaderStyle = {
    fontFamily:'Dosis', fontSize:'4.4rem', fontWeight:600, color:'white',marginLeft:'10px', alignSelf:'center'
  }
  let subHead = {
    fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'10px', letterSpacing:4.4, 
  }
    return (
    
  <div style={{height:'100vh'}}>
  
      <div className="manifesto" style={{...sticky,display:context.phoneClicked ? 'none' : 'flex'}}>
  
      <div className={phone ? 'manifesto-card-phone':'manifesto-card'} style={{position:'relative', top:phone && -70}} >
       
    
{phone ? (
    <>
    <div style={{width:'100vw', height:'110px', backgroundColor:'white',position:'relative',display:'flex', justifyContent:'flex-end'}}> 


    <h2  style ={{...subHeaderStyle, fontSize:phone ? '2.2rem' : '4.4rem',color:'black',fontFamily:'Bree Serif',marginRight:40}}><span style={{fontFamily:'Bree Serif', fontWeight:100,opacity:0.2,fontSize:phone ? '2.2rem' : '4.4rem', }}>OUR</span>MANIFESTO</h2>

 
    </div>
    <div style={{display:'flex', width:'100vw',}}>
            <div className='image-phone-manifesto' >
                <img src={place } />
                </div>
      <div style={{display:'flex',flexDirection:'column',backgroundColor:'lightgray'}}>
      <div className='manifesto-card-v2-phone-content'>
        <div style={{marginLeft:'15%',marginTop:20}}>
          
        <div style={{display:'flex', width:'fit-content', backgroundColor:'black',height:30,alignItems:'center',marginLeft:10}}>
      <p style={{phoneStyle,color:'white',fontFamily:'Dosis', fontSize:'1.4rem',padding:'0 10px',}} >We are the <TextTransition inline={true} direction={'down'} style={{}} springConfig={presets.default} >
        {TEXTS[activeIndex % TEXTS.length]}
      </TextTransition>
</p> </div>   

<span style={phoneStyle}><span style={{fontFamily:'Bree Serif', fontWeight:500,fontSize:'1.2rem',opacity:0.9}}>NORMALCY</span> was never meant for us.</span>
<br/>
<p style={phoneStyle}>Deep down, we all crave for something more: <br/>
To become the best versions of ourselves

</p>
<br/>
<p style={phoneStyle}>
    <span >Our dreams wake us up before the sun does.</span><br/>
    <span>They may call us crazy, but that's okay.</span><br/>
    <span>They never really understood us anyway</span><br/>
</p>

<br/><p style={phoneStyle}>
    <span>Kyn is an attitude that we choose to step into</span><br/>
    <span>It's a mentality, our powerful alter egos</span><br/>
    <span>One that will allow us to break free from this broken system</span>
    
</p>
<br/>
<p style={phoneStyle}>
    <span>Whatever our past is, it doesn't matter here.</span><br/>
    <span>Here, it's a free start</span><br/>
    <span>Here, we are your Kyn.</span><br/>
    <span>Here, we are family</span><br/>
    <span >Welcome to the Sanctuary.</span>
</p>
</div>
</div>
     <BarContainer   forwardRef={musicBarRef} manifestoMusicToggle={manifestoMusicToggle} context={context}/>
  
        </div>
         </div>
    </> 
) 

        :


    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',overflow:'hidden',top:'0px',position:'relative',}}>
  <div style={{width:'100vw', height:'110px', backgroundColor:'white',position:'relative',display:'flex',opacity:0.8}}> 
  <div style={{width:'45%'}}></div>
  <div style={{width:'50%',display:'flex', justifyContent:'center' }}>
    <h2  style ={{...subHeaderStyle, fontSize:phone ? '2.2rem' : '4.4rem',color:'black',fontFamily:'Bree Serif',}}><span style={{fontFamily:'Bree Serif', fontWeight:100,opacity:0.2,fontSize:phone ? '2.2rem' : '4.4rem', }}>OUR</span>MANIFESTO</h2>
   </div>
 
    </div>
 
        <div style={{display:'flex', width:'100vw',justifyContent:'center',alignItems:'center'}}>
            <div className='image-manifesto' >
                <img src={place } />
                </div>
      <div style={{display:'flex'}}>
      <div className='manifesto-card-v2-content'>
        <div style={{marginLeft:'20%',marginTop:20}}>
          
        <div style={{display:'flex', maxWidth:'fit-content', backgroundColor:'black',transition: 'maxWidth 5s infinite'}}>
      <p style={{style,color:'white',fontFamily:'Dosis', fontSize:'1.4rem',padding:'0 10px',margin: "0 4px"}} >We are the &nbsp;<TextTransition inline={true} direction={'down'} style={{}} springConfig={presets.default} >
        {TEXTS[activeIndex % TEXTS.length]}
      </TextTransition>
   
</p></div>  
<BarContainer   forwardRef={musicBarRef} manifestoMusicToggle={manifestoMusicToggle} context={context}/>
 <span style={style}><span style={{fontFamily:'Bree Serif', fontWeight:500,fontSize:'1.2rem',opacity:0.9}}>NORMALCY</span> was never meant for us.</span>
<br/>
<p style={style}>Deep down, we all crave for something more: <br/>
To become the best versions of ourselves

</p>
<br/>
<p style={style}>
    <span >Our dreams wake us up before the sun does.</span><br/>
    <span>They may call us crazy, but that's okay.</span><br/>
    <span>They never really understood us anyway</span><br/>
</p>

<br/><p style={style}>
    <span>Kyn is an attitude that we choose to step into</span><br/>
    <span>It's a mentality, our powerful alter egos</span><br/>
    <span>One that will allow us to break free from this broken system</span>
    
</p>
<br/>
<p style={style}>
    <span>Whatever our past is, it doesn't matter here.</span><br/>
    <span>Here, it's a free start</span><br/>
    <span>Here, we are your Kyn.</span><br/>
    <span>Here, we are family</span><br/><br/>
    <span style={{fontWeight:700,}}>Welcome to the Sanctuary.</span>
</p>
</div>

        </div>
    
  
        </div>
         </div>
  
      </div>
    }    
      </div> 
      
      </div>    </div>
    )
  })
  const equalize = keyframes`
  0% {
    height: 60px;
  }
  4% {
    height: 50px;
  }
  8% {
    height: 40px;
  }
  12% {
    height: 30px;
  }
  16% {
    height: 20px;
  }
  20% {
    height: 30px;
  }
  24% {
    height: 40px;
  }
  28% {
    height: 10px;
  }
  32% {
    height: 40px;
  }
  36% {
    height: 60px;
  }
  40% {
    height: 20px;
  }
  44% {
    height: 40px;
  }
  48% {
    height: 70px;
  }
  52% {
    height: 30px;
  }
  56% {
    height: 10px;
  }
  60% {
    height: 30px;
  }
  64% {
    height: 50px;
  }
  68% {
    height: 60px;
  }
  72% {
    height: 70px;
  }
  76% {
    height: 80px;
  }
  80% {
    height: 70px;
  }
  84% {
    height: 60px;
  }
  88% {
    height: 50px;
  }
  92% {
    height: 60px;
  }
  96% {
    height: 70px;
  }
  100% {
    height: 80px;
  }
  
  `
  const Bars = styled.span`
   
    animation: ${equalize} 1.25s steps(25,end) 0s infinite;
  ` 
  

  const BarContainer = ({ forwardRef, context,manifestoMusicToggle}) => {
    let play = (e) => {
      forwardRef.current.style.animationPlayState = 'running'
    }
    let pause = (e) => {
      forwardRef.current.style.animationPlayState = 'paused'
      console.log('paused')
    }
    return(
      <div className='music-bars' onClick={manifestoMusicToggle} >
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
  
      <Bars style={{animationPlayState:context.musicPlay ? 'running' : 'paused',opacity:context.musicPlay ? 1 : 0}}></Bars>
     <VolumeOffIcon style={{display : context.musicPlay ? 'none' : 'block', color:'black', height:'60px',width:'50px',paddingBottom:'20px' }} />
      </div>
   
   )
  }
  export default ManifestoV2
import React, {useState,useEffect, useRef,useContext} from 'react'
import styled, { keyframes } from 'styled-components'
import { HeaderContext } from '../App.js'
import WebFont from 'webfontloader';
import Modal from "react-animated-modal";
import {motion,AnimatePresence} from 'framer-motion'
import ReactCompareImage from 'react-compare-image';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ArtModal from './ArtModal';
import * as Scroll from 'react-scroll';
import Drawer from "react-bottom-drawer";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useSwipeable } from 'react-swipeable';
const art1 = require('./ArtAssets/art1.jpg')
const art2 = require('./ArtAssets/art2.jpg')
const art3 = require('./ArtAssets/art3.jpg')
const art4 = require('./ArtAssets/art4.jpg')
const art5 = require('./ArtAssets/art5.jpg')
const art6 = require('./ArtAssets/art6.jpg')
const art7 = require('./ArtAssets/art7.jpg')
const art8 = require('./ArtAssets/art8.jpg')
const art9 = require('./ArtAssets/art9.jpg')
const art10 = require('./ArtAssets/art10.jpg')
const art11 = require('./ArtAssets/art11.jpg')
const art12 = require('./ArtAssets/art12.jpg')

const newArt1 = require('./KYN Designed Avatar Collection D werewolf form (2).jpg')
const newArt2 = require('./KYN Designed Avatar Collection D werewolf no hand (1).jpg')
const avatar = require('./art_avatar_2.gif')
const phoneAvatar = require('./kyn_phone_avatar.png')

export default function NewArt(){
    const context = useContext(HeaderContext)
    const ref = useRef(null)
    const phoneSliderRef = useRef(null)
    const [phoneSlideUp,setPhoneSlideUp] = useState(false)
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    const [card1,setCard1] = useState(false)
    const [card2,setCard2] = useState(false)
    const[clickSlider,setClickSlider] = useState(false)
    const close = () => setClickSlider(false)
    const open = () => setClickSlider(true)
    const[phoneSlider,setPhoneSlider] = useState(false)
 
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
        fontFamily:'Dosis', fontSize:'4.4rem', fontWeight:600, color:'white', alignSelf:'center',marginLeft:'30px'
      }
      let subHead = {
       fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'10px', letterSpacing:4.4, 
       }
      useEffect(() => {
        window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka','Roboto Condensed','Bree Serif','Dosis']
          }
        });
        const phoneModal = phoneSliderRef.current
        if(phoneModal){
             phoneModal.addEventListener('touchstart',handleTouchStart,false)
  phoneModal.addEventListener('touchmove',handleTouchMove,false)
        }
       

       }, [])
      const click = () => {
        setPhoneSlider(true)
        console.log(phoneSlider)
      }
    
      var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
        } else {
            /* left swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
            setPhoneSlideUp(true);
        } else { 
            /* up swipe */
            setPhoneSlideUp(false)
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

    const onClose = () => {
        if(phoneSlideUp === true){
             setPhoneSlideUp(false)
        console.log('click')
        }
       
    }

   
    return(
       
        <>
        {phone ? 
        <div style={{scrollBehavior:'smooth',overflow:'visible'}} onClick={onClose}>
        <div style={{width:'100%',height:'100vh', position:'relative',display:'flex',flexDirection:'column',alignItems:'center',}}>
           <div style={{width:'100vw', height:'60px', backgroundColor:'white',position:'relative',display:'flex',marginTop:15,}}> 
  <div style={{width:'35%'}}></div>
  <div style={{width:'800px', transform:'translateX(-5%)',display:'flex', justifyContent:'flex-end' }}>
    <h2  style ={{...phoneSubHeaderStyle, fontSize:'2.2rem' ,color:'black',fontFamily:'Bree Serif',}}><span style={{fontFamily:'Bree Serif', fontWeight:100,opacity:0.2,fontSize:phone ? '2.2rem' : '4.4rem', }}>OUR</span>GALLERY</h2>
   </div>
    </div>
    <div style={{width:'100vw', height:'60px', backgroundColor:'white',position:'relative',display:'flex',marginTop:15,}}> 

  <div style={{width:'90%',display:'flex', justifyContent:'flex-end',textAlign:'right',margin:'0 auto',height:'fit-content',}}>
    <span style={{...phoneStyle,wordBreak:'break-word',fontFamily:'Smooch Sans',fontWeight:800}}>
    <span>10,200 unique avatars. Your KYN alter-egos.<br/> Experience The Sanctuary through them.</span>
<br/>
Can’t keep those sneaky werewolves from shapeshifting.<br/> If only we knew when…</span>
   </div>
    </div>
    
    <div  style={{display:context.phoneClicked ? 'none' : 'flex', flexDirection:'column',width:'100%',height:'100%',gap:15,marginTop:65}} className='art-parent-container' >
   
    <Carousel
    animation='slide'
    duration={400}
    navButtonsAlwaysVisible={false}
    stopAutoPlayOnHover={false}
    navButtonsAlwaysInvisible={true}
    indicators={true}
    >
        <div>
    <div style={{display:'flex',alignItems:'center',flexDirection:'row',gap:'15px',justifyContent:'center',width:'100%',height:'100%'}}>
        
    {row1.filter((i,index) => index < 2).map((i,index) => (
        <div className='art-phone-image-card'>
            <img src={i.img} alt='avatar'/>
            </div>
    ))}
    </div>
            
    <div  style={{display:'flex',alignItems:'center',flexDirection:'row',gap:'15px',justifyContent:'center',marginTop:15}}>
    {row1.filter((i,index) => index >= 2).map((i,index) => (
        <div className='art-phone-image-card'>
            <img src={i.img} alt='avatar' />
            </div>
    ))}

    </div>
    </div>
    <div>
    <div style={{display:'flex',alignItems:'center',flexDirection:'row',gap:'15px',justifyContent:'center',width:'100%',height:'100%'}}>
        
    {row2.filter((i,index) => index < 2).map((i,index) => (
        <div className='art-phone-image-card'>
            <img src={i.img} alt='avatar'/>
            </div>
    ))}
    </div>
            
    <div  style={{display:'flex',alignItems:'center',flexDirection:'row',gap:'15px',justifyContent:'center',marginTop:15}}>
    {row2.filter((i,index) => index >= 2).map((i,index) => (
        <div className='art-phone-image-card'>
            <img src={i.img} alt='avatar'/>
            </div>
    ))}

    </div>
    </div>
    <div>
    <div style={{display:'flex',alignItems:'center',flexDirection:'row',gap:'15px',justifyContent:'center',width:'100%',height:'100%'}}>
        
    {row3.filter((i,index) => index < 2).map((i,index) => (
        <div className='art-phone-image-card'>
            <img src={i.img} alt='avatar'/>
            </div>
    ))}
    </div>
            
    <div  style={{display:'flex',alignItems:'center',flexDirection:'row',gap:'15px',justifyContent:'center',marginTop:15}}>
    {row3.filter((i,index) => index >= 2).map((i,index) => (
        <div className='art-phone-image-card'>
            <img src={i.img} alt='avatar' />
            </div>
    ))}

    </div>
    </div>
    </Carousel>

        <div ref={phoneSliderRef} style={{position:'absolute',bottom:-100,margin:'0 auto',display:'flex',justifyContent:'center',alignItems:'center',left:'50%',zIndex:10,flexDirection:'column'}}  >
        <Arrow  className="angle right" x="0px" y="0px" viewBox="0 0 17.8 27.8" style={{overflow:"visible",enableBackground:"new 0 0 17.8 27.8",width:'15px',transform:'rotate(-90deg)', animationPlayState:phoneSlideUp ? 'paused' :'running'}} onClick={() =>setPhoneSlideUp(true)}>
        <path d="M17.8,10.1C12.2,10.1,7.7,5.6,7.7,0H0c0,5.4,2.5,10.6,6.7,13.9C2.5,17.3,0,22.4,0,27.8h7.7	c0-5.6,4.5-10.1,10.1-10.1l0,0V10.1z" style={{pointerEvents:'auto'}} ></path>
   </Arrow>
    <SecondArrow className="angle right" x="0px" y="0px" viewBox="0 0 17.8 27.8" style={{overflow:"visible",enableBackground:"new 0 0 17.8 27.8",width:'15px',transform:'rotate(-90deg) translateX(-5) ',pointerEvents:'none',opacity:0.2, animationPlayState:phoneSlideUp ? 'paused' :'running'}} >
        <path d="M17.8,10.1C12.2,10.1,7.7,5.6,7.7,0H0c0,5.4,2.5,10.6,6.7,13.9C2.5,17.3,0,22.4,0,27.8h7.7	c0-5.6,4.5-10.1,10.1-10.1l0,0V10.1z" style={{pointerEvents:'auto'}} ></path>
   </SecondArrow>
          <Drawer isVisible={phoneSlideUp} onClose={onClose} hideScrollbars={true} duration={550} className='art-phone-drawer'>
          <ReactCompareImage leftImage={newArt1} rightImage={newArt2}/>

        
          </Drawer>
        </div>
        <div style={{position:'absolute',bottom:-180,width:'100vw',left:-110}}>
        <img src={phoneAvatar} style={{width:'100%', height:'auto', objectFit:'cover',transform:'scale(1.4) translateY(60px)'}} alt='avatar' />
        </div>
    </div>
   
   
       
   
            

   
   
 
        </div> 
        
        </div>
        
        
        : (

      
       <div style={{display:'flex', alignItems:'center',position:'relative', top:'0px',flexDirection:'column',width:'100vw', minHeight:'100vh',overflow:'hidden'}}>
          
          <div style={{width:'100vw', height:'120px', backgroundColor:'white',position:'relative',display:'flex',marginTop:'20px',alignItems:'center',justifyContent:'center',rowGap:15,margin:'0 auto',}}> 
      
  <div style={{width:'fit-content', display:'flex', justifyContent:'center',alignItems:'center',textAlign:'right',whiteSpace:'wrap',lineHeight:'1.7rem'}}>
  <div style={{width:phone ? '90%' :'80%',display:'flex',justifyContent:'flex-end'}}>
  <p style={{...phoneStyle,textAlign:'right',lineHeight:'1.3rem',fontFamily:'Smooch Sans',fontWeight:800,fontSize:phone ? '1.2rem':'1.3rem',marginRight:phone && '5%',}}>
  10,200 unique avatars. Your KYN alter-egos. Experience The Sanctuary through them.<br/>
  Can’t keep those sneaky werewolves from shapeshifting. If only we knew when…
  </p>
</div>
<div style={{width:phone ? '90%' :'50%',display:'flex', justifyContent:phone ? 'flex-end':'flex-start',marginRight:phone && '5%'}}>
  <h2  style ={{...subHeaderStyle, fontSize:phone ? '2.1rem' : '4rem',color:'black',fontFamily:'Bree Serif',transform:'translateY(-5px)'}}><span style={{fontFamily:'Bree Serif', fontWeight:100,opacity:0.2,fontSize:phone ? '2.1rem' : '4rem', }}>OUR</span>GALLERY</h2>
 </div>
 </div>
    </div>

          
            <div style={{width:'100vw', display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',margin:'0 auto'}}>          
            <div  className='art-gallery-container'>
          <div className='art-card-row'>
            {row1.map((i,index) => 
            (
                <div   className='art-card-frame'
                >
                      
                             <img src={i.img} alt='avatar'  />
                      
                     
                     
                   </div>
            )
            )}
        
  
    </div>
    <div className='art-card-row' style={{zIndex:clickSlider ? -1 : 5}}>
    {row2.map((i,index) => 
            (
                <div  className='art-card-frame'
                >
                      
                             <img src={i.img} alt='avatar' />
                      
                     
                     
                   </div>
            )
            )}
       
    </div>
    <div className='art-card-row' >
    {row3.map((i,index) => 
            (
                <div  className='art-card-frame'
                >
                      
                             <img src={i.img} alt='avatar' />
                      
                     
                     
                   </div>
            )
            )}
  
    </div></div>
 
    <div style={{cursor:'pointer'}}>
  
        <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => null}
>
     {clickSlider && <ArtModal clickSlider={clickSlider} handleClose={close} />}
</AnimatePresence>
       <img src={avatar} className='art-avatar' onClick={() => (clickSlider ? close() : open())} />
    </div>
 
        </div>

    </div>  )}
    
    </>
    )
  
}



const row1 = [
    {
        id:'1',
        img:art1
    },
    {
        id:'2',
        img:art2
    },
    {
        id:'3',
        img:art3
    },
    {
        id:'4',
        img:art4
    },
    
   
]

const row2 = [
    {
        id:'1',
        img:art5
    },
    {
        id:'2',
        img:art6
    },
    {
        id:'3',
        img:art7
    },
    {
        id:'4',
        img:art8
    },
]

const row3 = [
    {
        id:'1',
        img:art9
    },
    {
        id:'2',
        img:art10
    },
    {
        id:'3',
        img:art11
    },
    {
        id:'4',
        img:art12
    },
]





const bouncingArrow = keyframes`
    0%{
        transform:translateY(0%) rotate(-90deg);

    }
    50%{
        transform:translateY(-35%) rotate(-90deg);
    }
    100%{
        transform:translateY(0%) rotate(-90deg);
    }
`
const bouncingBottomArrow = keyframes`
0%{
    transform:translateY(-10%) rotate(-90deg);

}
50%{
    transform:translateY(-45%) rotate(-90deg);
}
100%{
    transform:translateY(-10%) rotate(-90deg);
}


`
const Arrow = styled.svg`
animation: ${bouncingArrow} 1.5s infinite;


`
const SecondArrow = styled.svg`
animation: ${bouncingBottomArrow} 1.5s infinite;

`


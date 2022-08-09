import React, {useState, useEffect,useContext} from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import ReactCardFlip from 'react-card-flip'
import { HeaderContext } from '../App.js'
import "swiper/css";
import WebFont from 'webfontloader';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import FounderImage from './TeamImages/founders-image.png'
import FounderImage1 from './TeamImages/founders-image-2.png'
import ArtistImage from './TeamImages/artist-image.png'
import CoderImage from './TeamImages/coder-image.jpeg'
import Mod1 from './TeamImages/bot-image.png'
import Mod2 from './TeamImages/bot-image-2.png'
function Team() {
  const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
  const context = useContext(HeaderContext)
 
  useEffect(() => {
 window.matchMedia("(max-width: 10600px)").addEventListener('change', e => setPhone(e.matches))
 WebFont.load({
  google: {
    families: ['Bree Serif','Dosis','Smooch Sans']
  }
});

}, [])
let phoneSubHead = {
  fontWeight:900, fontSize:'1.3rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'10px', letterSpacing:4.4, 
}
let phoneStyle={
  fontWeight:200, fontSize:'1.1rem',fontFamily:'Dosis',marginLeft:'10px'
}
let subHeaderStyle = {
  fontFamily:'Bree Serif', fontSize:'2.25rem', fontWeight:700, color:'black',
}
let subHead = {
  fontWeight:300, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative',  letterSpacing:4.4, 
}
let style={
  fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis',marginTop:'10px'
}
  return(
    <div style={{height:'100vh',overflowX:'hidden'}}>
      
      
      <section style={{alignItems:phone ? 'flex-start' :'center',paddingTop:phone ? 0 :'0px',top: 70,display:context.phoneClicked ? 'none' : 'flex',}}>
 {phone ? (
<>
<div style={{width:'100vw', height:phone ? 'fit-content':'60px', backgroundColor:'white',opacity:0.8,position:'relative',display:'flex',marginTop:!phone && 15,}}> 
<div style={{width:'35%'}}></div>
<div style={{width:'800px', transform:'translateX(-5%)',display:'flex', justifyContent:'flex-end' }}>
  <h2  style ={{ fontSize:'2.2rem' ,color:'black',fontFamily:'Bree Serif',}}><span style={{fontFamily:'Bree Serif', fontWeight:100,opacity:0.2,fontSize:phone ? '2.2rem' : '4.4rem', }}>OUR</span>TEAM</h2>
 </div>
  </div>
  <div style={{width:'100vw', position:'relative',display:'flex',marginTop:!phone && 15,backgroundColor:phone && 'white', opacity:phone && 0.8,transform:phone&& 'translateY(-50px)'}}> 

<div style={{width:'90%',display:'flex',justifyContent:'flex-end', textAlign:'right',margin:'0 auto',height:'fit-content',}}>
  <span style={{...phoneStyle,wordBreak:'break-word',fontFamily:'Smooch Sans',fontWeight:400,fontSize:'1.1rem'}}>
  The heart and soul of Kyn. <br />The people who believed in this vision before anybody else did.</span>
 </div>
</div>
 </>
  )
:    <div style={{width:'100vw', height:'110px', backgroundColor:'white', opacity:0.8,position:'relative',display:'flex',alignItems:'center',justifyContent:'center',gap:50}}> 
<div style={{width:'55%',display:'flex',justifyContent:'flex-end'}}>
  <p style={{...phoneStyle,textAlign:'right',lineHeight:'1.3rem',fontFamily:'Smooch Sans',fontWeight:400,fontSize:'1.3rem'}}>
  The heart and soul of Kyn. <br />The people who believed in this vision before anybody else did.
  </p>
</div>
<div style={{width:'35%',display:'flex', justifyContent:'flex-start' }}>
  <h2  style ={{...subHeaderStyle, fontSize:phone ? '2.2rem' : '4rem',color:'black',fontFamily:'Bree Serif',transform:'translateY(-5px)'}}><span style={{fontFamily:'Bree Serif', fontWeight:100,opacity:0.2,fontSize:phone ? '2.2rem' : '4rem', }}>OUR</span>TEAM</h2>
 </div>

  </div>
} 
  <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={phone ? 1 : 3}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    }}
   loop={true}
   pagination={phone ? true : false}
    modules={[EffectCoverflow, Pagination]}
    className={phone ? 'phone-swiper' : 'mySwiper'}
  >
     
    <SwiperSlide>
      <div className={phone ? 'profileCard-Phone': 'profileCard' }>
      <img src={FounderImage} className='profilePicture' alt='Founder 1 image' />
     <h1 style={subHeaderStyle}>Divine Prophet</h1>
     <h3 style={subHead}>FOUNDER</h3>
    
 
    <span style={style}>Anime connoisseur</span>
    <span style={style}>Sleepy by 8pm. *Yawns*</span>
         <span style={{...style,textAlign:'center'}}>All bout' dem personal development gAinZ</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='/'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @divineprophet25</span>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={FounderImage1} className='profilePicture' alt='Founder 2 image' />
      <h1 style={subHeaderStyle}>Holyxaffinity</h1>
     <h3 style={subHead}>FOUNDER</h3>
    
 
    <span style={style}>uni dropout to-be :)</span>
    <span style={style}>#zuckerberg  #billgates</span>
         <span style={style}>coping mechanism: caffeine</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='/'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @holyxaffinity</span>
      </div>
      </div>
 
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={ArtistImage} className='profilePicture' alt='Artist image'/>
      <h1 style={subHeaderStyle}>Auxuris</h1>
     <h3 style={subHead}>LEAD ARTIST</h3>
    
 
    <span style={style}>I draw the shit that you see.</span>
    <span style={style}>Plays too much genshin/LOL</span>
         <span style={style}>Secretly a vampire.</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='/'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @auxuris </span>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={CoderImage} className='profilePicture' alt='Coder image'/>
      <h1 style={subHeaderStyle}>Jem</h1>
     <h3 style={subHead}>TECH LEAD</h3>
    
 
    <span style={style}>The work is the work.</span>
    <span style={style}>MAMBA MENTALITY</span>
         <span style={style}>#ripkobe</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='/'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @jem </span>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={Mod1} className='profilePicture' alt='Mod 1 image' />
      <h1 style={subHeaderStyle}>Tom</h1>
     <h3 style={subHead}>HEAD MOD</h3>
  
    
 
    <span style={style}>probably still sleeping somewhere</span>
    <span style={style}>your friendly neighborhood mod :)</span>
    <span style={style}>that bans idiots from time to time</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='/'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @headmod </span>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={Mod2} className='profilePicture' alt='Mod 2 image'/>
      <h1 style={subHeaderStyle}>Jerry</h1>
     <h3 style={subHead}>HEAD MOD</h3>
  
  
    
 
    <span style={style}>probably still sleeping somewhere</span>
    <span style={style}>your friendly neighborhood mod :)</span>
    <span style={style}>that bans idiots from time to time</span>
      <div className='profileCard-icons'>
      
        <div className='teamcard-svg'>
       <a href='/'><span className='team-icon-twitter '></span></a>   

        </div>
         <span style={{...style, marginTop:0}}> @headmod </span>
      </div>
      </div>
    </SwiperSlide>

  </Swiper>


</section>
    </div>
  

 )
}

export default Team
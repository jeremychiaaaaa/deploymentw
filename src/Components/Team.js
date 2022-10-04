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
import HelanaImage from './TeamImages/helena image.png'
import KoswiImage from './TeamImages/koswi image.png'
import NaufalImage from './TeamImages/naufal image.png'
import ArtistImage from './TeamImages/artist-image.png'
import CoderImage from './TeamImages/coder-image.jpeg'
import Mod1 from './TeamImages/tom image.png'
import Mod2 from './TeamImages/jerry image.png'
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
    
 
    <span style={style}>passionate about life, people and all things exciting</span>
    <span style={style}>sleepy by 9pm. *Yawns*</span>
         <span style={{...style,textAlign:'center',paddingBottom:30}}>all bout' dem personal development gAinZ</span>
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={FounderImage1} className='profilePicture' alt='Founder 2 image' />
      <h1 style={subHeaderStyle}>Holyxaffinity</h1>
     <h3 style={subHead}>FOUNDER</h3>
    
 
    <span style={style}>gotta beat the man in the mirror</span>
    <span style={style}>4 hours sleeping giant</span>
         <span style={{...style,paddingBottom:30}}>coping mechanism: Caffeine</span>
      
      </div>
 
    </SwiperSlide>
    
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={CoderImage} className='profilePicture' alt='Coder image'/>
      <h1 style={subHeaderStyle}>Jem</h1>
     <h3 style={subHead}>TECH LEAD</h3>
    
 
    <span style={style}>the work is the work</span>
    <span style={style}>MAMBA MENTALITY</span>
         <span style={{...style,paddingBottom:30}}>#ripkobe</span>
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={HelanaImage} className='profilePicture' alt='Helena image' />
      <h1 style={subHeaderStyle}>Helena</h1>
     <h3 style={subHead}>LEAD ARTIST</h3>
  
    
 
    <span style={style}>things are always better with a warm cup of tea! 🫖</span>
    <span style={{...style,paddingBottom:30}}>I enjoy nature walks and drawing in my cosy corner!</span>
  
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={ArtistImage} className='profilePicture' alt='Artist image'/>
      <h1 style={subHeaderStyle}>Nico</h1>
     <h3 style={subHead}>SENIOR ARTIST</h3>
    
 
    <span style={style}>I draw the shit that you see</span>
    <span style={style}>plays too much genshin/LOL</span>
         <span style={{...style,paddingBottom:30}}>secretly a vampire</span>
    
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={KoswiImage} className='profilePicture' alt='Koswi image' />
      <h1 style={subHeaderStyle}>Koswi</h1>
     <h3 style={subHead}>ARTIST</h3>
  
    
 
    <span style={style}>grew up playing Assassin's Creed and Diablo 2</span>
    <span style={style}>long drives are my therapy</span>
    <span style={{...style,paddingBottom:30}}>sashimi yumz</span>
  
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={NaufalImage} className='profilePicture' alt='Naufal image' />
      <h1 style={subHeaderStyle}>Naofaro</h1>
     <h3 style={subHead}>ARTIST</h3>
  
    
 
    <span style={style}>my cat is in charge, I just pay the rent</span>

    <span style={{...style,paddingBottom:30}}>simplicity is the key to happiness</span>
  
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={Mod1} className='profilePicture' alt='Mod 1 image' />
      <h1 style={subHeaderStyle}>Tom</h1>
     <h3 style={subHead}>HEAD MOD</h3>
  
    
 
    <span style={style}>probably still sleeping somewhere</span>
    <span style={style}>your friendly neighborhood mod :)</span>
    <span style={{...style,paddingBottom:30}}>that bans idiots from time to time</span>
      
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className={phone ? 'profileCard-Phone' : 'profileCard'}>
      <img src={Mod2} className='profilePicture' alt='Mod 2 image'/>
      <h1 style={subHeaderStyle}>Jerry</h1>
     <h3 style={subHead}>HEAD MOD</h3>
  
  
    
 
    <span style={style}>probably still sleeping somewhere</span>
    <span style={style}>your friendly neighborhood mod :)</span>
    <span style={{...style,paddingBottom:30}}>that bans idiots from time to time</span>
      
      </div>
    </SwiperSlide>

  </Swiper>


</section>
    </div>
  

 )
}

export default Team
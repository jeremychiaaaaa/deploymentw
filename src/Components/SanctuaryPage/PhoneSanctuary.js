import React, {useState, useEffect,useContext} from 'react'
import { motion } from 'framer-motion'
import { HeaderContext } from '../../App';
import ReactCardFlip from 'react-card-flip'
import "swiper/css";
import WebFont from 'webfontloader';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import Villa1 from './Villa-1-pics/villa1.jpeg'
import Villa2 from './Villa-1-pics/villa2.webp'
import Villa3 from './Villa-1-pics/villa3.webp'
import Villa4 from './Villa-1-pics/villa4.webp'
import Villa5 from './Villa-1-pics/villa5.webp'
import Villa6 from './Villa-1-pics/villa6.webp'
import Villa7 from './Villa-1-pics/villa7.webp'
import Villa8 from './Villa-1-pics/villa8.webp'
import Villa9 from './Villa-1-pics/villa9.webp'
import Villa10 from './Villa-1-pics/villa10.webp'
import Villa11 from './Villa-1-pics/villa11.webp'
import ConceptImage from './metaverse-image.png'
import fs from './f&s.jpeg'
import SanctuaryImageCarouselOne from './SanctuaryImageCarouselOne';
import SanctuaryImageCarouselTwo from './SanctuaryImageCarouselTwo';
import SanctuaryImageCarouselThree from './SanctuaryImageCarouselThree';
const PhoneSanctuary = () => {
    let stylee={
        fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis'
      }
      let phoneStyle={
        fontWeight:200, fontSize:'1.2rem',fontFamily:'Dosis',marginLeft:'10px',
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
      const context = useContext(HeaderContext)
    const[styles,setStyles] = useState({marginBottom:0})
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    let style={
      position: 'relative',
      fontFamily:'Bree Serif', fontSize:'4.6rem', fontWeight:800, color:'black',bottom:'50px'
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
    <div style={{backgroundColor:'white',display:context.phoneClicked ? 'none' : 'flex'}}>
                <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={phone ? 1 : 3}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    }}
   loop={true}
   pagination={phone ? true : false}
    modules={[EffectCoverflow, Pagination]}
    className={phone ? 'phone-swiper' : 'mySwiper'}
  >
     
   <SwiperSlide className='phone-sanctuary-card' >
  
        <div className='sanctuary-phone-image' >
           <img src={ConceptImage} style={{objectPosition:'80% 50%'}} alt='Concept ' />
        </div>

        <h2 style={{...subHead, marginTop:'60px'}}>THE CONCEPT</h2>
      <p style={{...stylee, marginTop:'60px', marginLeft:'10px',width:'95%',height:'100vh' }}>"As terrifying and painful as reality can be, it's also... the only place that... you can get a decent
meal. Because, reality... is real."<br/><span style={{fontStyle:'italic',textAlign:'center'}}>(James Halliday, Ready Player One, 2018)</span> <br/><br/>
While the "Metaverse" is an exciting concept, the technology for a metaverse like Ready Player One's will not arrive for many years to come.<br/><br/>
Meanwhile, we choose to focus on reality, because reality is still where we are going to be
spending most of our time.</p>

       

   </SwiperSlide>
   <SwiperSlide className='phone-sanctuary-card' >
  
  <div className='sanctuary-phone-image' >
     <img src={fs} alt='feasibility and sustainability'  />
  </div>

  <h2 style={{...subHead, marginTop:'60px',fontSize:'1.5rem',}}>FEASIBILITY AND SUSTAINABILITY</h2>
  <p style={{...stylee, marginTop:'60px', marginLeft:'15px',width:'95%',height:'100vh'}}>Our real-life Sanctuaries have to be self-sustainable.<br/><br/>  So we will buy over existing Airbnb villas that already have a profitable track record and convert them into our Sanctuaries. <br/><br/>
      Lots of admin, legal and regulatory frameworks  still need to be tested. We will start off with just one villa, and perfect the system before expanding.


<br /> <br/>
<span style={{fontWeight:'700',fontFamily:'Bree Serif', fontSize:'1.1rem',}}>Sounds like a feat, but normalcy was never meant for us. We are here to redefine norms. #LFG</span></p>  

 

</SwiperSlide>
<SwiperSlide className='phone-sanctuary-card'  >
  
  <div className='sanctuary-carousel-image' >
   <SanctuaryImageCarouselOne />
  </div>
  
  <div className='villa-1-content' style={{width:'95%',marginLeft:'20px',}} >
                    <h2 style={{fontSize:'2.4rem', fontWeight:700, fontFamily:'Bree Serif',marginBottom:15,marginLeft:10,marginTop:20}}>Villa 1</h2>
                    <p style={{height:'100vh',display:'flex',flexDirection:'column',}}>
                    <span style={phoneStyle}>Sale Price : 1,500,000 USD</span>
                   <br/> <br/>
                    <span style={phoneStyle}>No. of Bedrooms: 12</span>
           <br/> <br/>
                    <span style={{...phoneStyle,width:'90%',}}>Location: <br/>
           <br/>
                      <span style={{...phoneStyle,marginLeft:30,width:'90%',display:"flex", flexDirection:'column'}}>
                      ● Seminyak, Bali, Indonesia<br/><br/>
<span style={{display:'flex', flexDirection:'row'}}>● <span style={{marginLeft:5}} >2 minutes drive to Double Six beach with its many beach bars</span></span> <br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>5 minutes drive to Oberoi Beach</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>10 minutes walking distance from shops, restaurants, and nightlife clubs</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>15 minutes walk to Eat Street - crammed with restaurants, bars and shops</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>25 minutes drive from Ngurah Rai Airport</span></span>

                      </span>
                    </span></p>
            
 </div>

</SwiperSlide>
<SwiperSlide className='phone-sanctuary-card' >
  
  <div className='sanctuary-carousel-image' >
   <SanctuaryImageCarouselThree />
  </div>

  <div className='villa-1-content' style={{width:'95%',marginLeft:'20px',}} >
                    <h2 style={{fontSize:'2.4rem', fontWeight:700, fontFamily:'Bree Serif',marginBottom:15,marginLeft:10,marginTop:40}}>Villa 2</h2>
                    
                   <p style={{height:'100vh',display:'flex',flexDirection:'column',}}><span style={phoneStyle}>Sale Price : 2,700,000 USD</span>
                   <br/>
                    <span style={phoneStyle}>No. of Bedrooms: 15</span><br/>
              
                    <span style={{...phoneStyle,width:'90%',}}>Location: <br/>
           <br/>
                      <span style={{...phoneStyle,marginLeft:30,width:'90%',display:"flex", flexDirection:'column'}}>
                      ● Bang Po, Koh Samui, Thailand<br/><br/>
                      <span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>2min drive to Bang Po Beach, famous for cheap and tasty seafood restaurants.</span></span><br/>
                      <span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>3 minutes drive to Ban Tai beach (shallow water and soft sand).</span></span><br/>
                  
                      <span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>7 minutes drive to the famous Fisherman’s Village and The Wharf.</span></span><br/>
                  
                      <span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>12 minutes drive to the famous Chaweng Beach, and Central Festival shopping mall.</span></span>

                      </span>
                    </span></p> 
                  </div>
 

</SwiperSlide>
<SwiperSlide className='phone-sanctuary-card' >
  
  <div className='sanctuary-carousel-image' >
   <SanctuaryImageCarouselTwo />
  </div>
  <div style={{height:'110vh', backgroundColor:'white', }}>
  <div className='villa-1-content' style={{width:'95%',marginLeft:'20px',}} >
                    <h2 style={{fontSize:'2.4rem', fontWeight:700, fontFamily:'Bree Serif',marginBottom:15,marginLeft:10,marginTop:20}}>Villa 3</h2>
                    
                    <span style={phoneStyle}>Sale Price : 1,200,000 USD</span>
                   <br/>
                    <span style={phoneStyle}>No. of Bedrooms: 10</span>
           <br/>
                    <span style={{...phoneStyle,width:'90%',}}>Location: <br/>
           <br/>
                      <span style={{...phoneStyle,marginLeft:30,width:'90%',display:"flex", flexDirection:'column'}}>
                      <span style={{display:'flex', flexDirection:'row'}}>● <span style={{marginLeft:5}} >3 minutes drive to Double Six beach with its many beach bars</span></span> <br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>5 minutes drive to Oberoi Beach</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>10 minutes walking distance from shops, restaurants, and nightlife clubs</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>15 minutes walk to Eat Street - crammed with restaurants, bars and shops</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>25 minutes drive from Ngurah Rai Airport</span></span>

                      </span>
                    </span>
                  </div>
 
</div>
</SwiperSlide>
  </Swiper>



    </div>
  )
}

export default PhoneSanctuary
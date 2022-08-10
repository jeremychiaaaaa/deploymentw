import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import {motion} from 'framer-motion'
const place = require('./Avatars/web art dreammap bri animal.png')
const Card8 = ({onMapClose}) => {
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    useEffect(() => {
        window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
        WebFont.load({
          google: {
            families: ['Bree Serif','Dosis']
          }
        });
       
       }, )
       let style={
        fontWeight:200, fontSize:'1.2rem',fontFamily:'Dosis',color:'black'
      }
      let phoneStyle={
        fontWeight:200, fontSize:'1.1rem',fontFamily:'Dosis',
      }
      let phoneSubHead = {
        fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative',color:'black',marginTop:'30px'
      }
     
      let subHead = {
        fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'0px', letterSpacing:3.4, 
      }
  return (
    <div className='routemap-content-container' style={{width:phone ? '100vw':'100%',display:'flex',justifyContent:!phone && 'center',position:phone ?'relative' : 'absolute',  left:phone ? 0:'50%',    transform:phone ? 'translate(0,190px)' : 'translate(-50%,0)',top:phone ? '-70px':200 }}>
    <div className='routemap-avatar' style={{width:phone ? '300px' :'35%',transform:!phone &&'scale(0.9)',alignSelf:!phone &&'flex-end',position:phone && 'absolute', left:phone &&'-110px'}} >
<img src={place} alt='avatar' style={{width:phone ? '100%':'350px',height:phone ? '100%':'75vh',zIndex:10, objectFit:'cover',transform:phone ? 'translateY(-150px)' : 'translateX(30px)'}} />
</div>
<div className='routemap-content-wrapper' style={{width:!phone &&'800px',height:!phone &&'70vh',overflow:'scroll', backgroundColor:'white',opacity:0.8,transform:!phone && 'translateX(-15%)', display:phone && 'flex', flexDirection: phone && 'column' }}>
 
  <motion.button
  style={{backgroundColor:'black',width:'100%',fontFamily:'Bree Serif', fontSize:'1.2rem', color:'white'}}
  onClick={onMapClose}
  whileHover={{backgroundColor:'rgba(220,220,220,0.5)',opacity:1, color:'black'}}
  >
   BACK TO MAP
  </motion.button>
  <div style={{width:phone ? '100vw':'100%', display:'flex', flexDirection:'column', backgroundColor:'white',justifyContent:phone ?'flex-start':'flex-start', alignItems:phone ? 'flex-start' :'center', opacity:0.95, height:phone ? '100vh':'100%', }}>
   <div style={{marginLeft:phone ? '10%' :'10%',width:'82%',marginTop:phone ?30 : 0}}>
   <h2 style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.8rem':'1.7rem'}}>Community Pet Fractionalisation</h2>
   <br/>
   
     <span style={{...phone ? phoneStyle : style,display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column',width:phone ? '90%':'90%',marginLeft:30}}>
    
Our very own KYN pet, where we will adopt an animal, and<br/> fractionalise pictures of it.<br/>

<span style={{marginTop:10}}>This pet will be living in one of our Sanctuaries, where you can visit and play with it.</span>

<span style={{marginTop:10}}>Fraction-holders can vote on its major life decisions to give it its best possible life.</span>
<br/>
For example, <br/>
    <span style={{marginLeft:20,marginTop:10}}>
      1. The design of its playhouse <br/> </span>
   <span style={{marginLeft:20,marginTop:10}}> 2. Choice of mate (if any)</span>    
     <span style={{marginLeft:20,marginTop:10}}> 3. Choice of caretaker</span> 
    <span style={{marginLeft:20,marginTop:10}}> 4. Gourmet pet treats</span>
    <span style={{marginLeft:20,marginTop:10}}>5. Luxury grooming services</span>  
      
     <span style={{marginLeft:20,marginTop:10}}>6. Recerational spots to bring it to:</span> <br/>
      <span style={{display:'flex', flexDirection:'row',gap:5,marginLeft:40 }}>●<span>Maybe even travel the world to visit our different Sanctuaries,or</span></span>
      <span style={{display:'flex', flexDirection:'row',gap:5,marginLeft:40,marginTop:10}}>●<span>Attend our in-person events</span></span>

     <span  style={{marginLeft:20,marginTop:10}}>IP could even be created out of this!</span> 

     <span style={{marginLeft:20,marginTop:10}}>The possibilities are endless and it is all up to the community's votes.</span> 

   
     </span>


   <br/>
   <br/>
   </div>
 </div>
</div>
</div>
  )
}

export default Card8
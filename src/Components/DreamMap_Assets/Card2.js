import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import {motion} from 'framer-motion'

const Card2 = ({onMapClose,img}) => {
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
<img src={img} alt='avatar' style={{width:phone ? '100%':'350px',height:phone ? '100%':'70vh',zIndex:10, objectFit:'cover',transform:phone && 'translateY(-152px)'}} />
</div>
<div className='routemap-content-wrapper' style={{width:!phone &&'800px',height:!phone &&'75vh',overflow:'scroll', backgroundColor:'white',opacity:0.8,transform:!phone && 'translateX(-15%)', display:phone && 'flex', flexDirection: phone && 'column' }}>
 
  <motion.button
  style={{backgroundColor:'black',width:'100%',fontFamily:'Bree Serif', fontSize:'1.2rem', color:'white'}}
  onClick={onMapClose}
  whileHover={{backgroundColor:'rgba(220,220,220,0.5)',opacity:1, color:'black'}}
  >
   BACK TO MAP
  </motion.button>
 <div style={{width:phone ? '100vw':'100%', display:'flex', flexDirection:'column', backgroundColor:'white', justifyContent:phone ?'flex-start' :'flex-start', alignItems:phone ? 'flex-start' :'center', opacity:0.95, height:phone ? '100vh':'100%',}}>
   <div style={{marginLeft:phone ? '10%' :'60px',width:'80%',marginTop:phone && 30}}>
    <h2 style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.8rem':'2.3rem',}}>IRL Sanctuaries</h2>

   
     <span style={{...phone ? phoneStyle : style,display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column',width:phone ? '90%':'85%'}}>
   <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}> Real Life Sanctuaries</span> 

  
    <span style={{marginLeft:30,marginTop:10}}> KYN's own private properties ranging from villas to castles.</span>
   
 
     <span style={{marginLeft:30,marginTop:10}}>A safe space we can truly call home.</span> 
    
 
   <span style={{marginLeft:30,marginTop:10}}> These will be our HQs and hangout spots.</span>
     
 
 
   <span style={{marginLeft:30,marginTop:10}}>    Our ultimate long-term goal is to have multiple sanctuaries<br/> across the globe for all KYNs.</span>
     
 
   <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}> IRL Land Sale</span> 


<span style={{marginLeft:30,marginTop:10}}> Rather than a virtual land sale, why not have a real life one?</span>


 <span style={{marginLeft:30,marginTop:10}}>Land that is part of our (future) castle's estate will be<br/> fractionalised  into NFT fractions.</span> 


<span style={{marginLeft:30,marginTop:10}}> Holders of these fractions could vote on how they want to<br/> develop that piece of land.</span>

 
     </span>


 
 
   </div>
 </div>
</div>
</div>
  )
}

export default Card2
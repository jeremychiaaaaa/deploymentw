import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import {motion,AnimatePresence} from 'framer-motion'
const place = require('./Avatars/web art dreammap bri phy merch.png')
const Card3 = ({onMapClose}) => {
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
      let phoneSubHeaderStyle = {
        fontFamily:'Bree Serif', fontSize:'2.2rem', fontWeight:700, color:'white',marginLeft:'25px', marginBottom:'20px'
      }
      let subHeaderStyle = {
        fontFamily:'Dosis', fontSize:'4.4rem', fontWeight:600, color:'white',marginLeft:'10px', alignSelf:'center'
      }
      let subHead = {
        fontWeight:900, fontSize:'3.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'0px', letterSpacing:3.4, 
      }
  return (
    <div className='routemap-content-container' style={{width:phone ? '100vw':'100%',display:'flex',justifyContent:!phone && 'center',position:phone ?'relative' : 'absolute', top:phone ? 0:'200px', left:phone ? 0:'50%',    transform:phone ? 'translate(0,190px)' : 'translate(-50%,0)',top:phone ? '-70px':200 }}>
    <div className='routemap-avatar' style={{width:phone ? '70vw' :'35%',transform:!phone &&'scale(0.9)',alignSelf:!phone &&'flex-end',position:phone && 'absolute', left:phone &&'-110px'}} >
<img src={place} style={{width:phone ? '100%':'350px',height:phone ? '100%':'75vh',zIndex:10, objectFit:'cover',transform:phone ? 'translateY(-150px)' : 'translateX(30px)'}} />
</div>
<div className='routemap-content-wrapper' style={{width:!phone &&'800px',height:!phone &&'70vh', backgroundColor:'white',opacity:0.8,transform:!phone && 'translateX(-15%)', display:phone && 'flex', flexDirection: phone && 'column' }}>
 
  <motion.button
  style={{backgroundColor:'black',width:'100%',fontFamily:'Bree Serif', fontSize:'1.2rem', color:'white'}}
  onClick={onMapClose}
  whileHover={{backgroundColor:'rgba(220,220,220,0.5)',opacity:1, color:'black'}}
  >
   BACK TO MAP
  </motion.button>
 <div style={{width:phone ? '100vw':'100%', display:'flex', flexDirection:'column', backgroundColor:'white',justifyContent:phone ?'flex-start':'flex-start', alignItems:phone ? 'flex-start' :'center', opacity:0.95, height:phone ? '100vh':'100%', }}>
   <div style={{marginLeft:phone ? '10%' :'14%',width:'82%',marginTop:phone && 30}}>
    <h2 style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.8rem':'2.3rem'}}>Physical Brand</h2>
      
     <span style={{...phone ? phoneStyle : style,display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column',width:phone ? '90%':'90%'}}>
   <span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>Welcome Merch</span>  

   <span style={{marginLeft:30,marginTop:10}}>  Mystery welcome box physically mailed to all verified KYNs.</span>

   <span style={{marginLeft:30,marginTop:10}}>Trust us, you'll want this!</span> 

    <span style={{marginLeft:30,marginTop:10}}>Screenshot date TBA</span>
<br/>

<span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>Physical Popups in Iconic Places</span> 

<span style={{marginLeft:30,marginTop:10}}>Pop-up shops at iconic tourist spots across the globe.</span> 
<span style={{marginLeft:30,marginTop:10}}>To spread our KYN movement and meet fellow KYNs.
</span>
 <br/>

 <span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>Limited Time Merch Shops</span>  

 <span style={{marginLeft:30,marginTop:10}}> Dopeass designs, special collaborations, limited edition.<br/> </span>
  <span  style={{marginLeft:30,marginTop:10}}>Up for a few days, then gone ;)</span>



<br/><br/>

     </span>


   <br/>
   <br/>
   </div>
 </div>
</div>
</div>
  )
}

export default Card3
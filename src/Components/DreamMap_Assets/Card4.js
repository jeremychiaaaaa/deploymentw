import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import {motion,} from 'framer-motion'

const Card4 = ({onMapClose,img}) => {
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    const heart = '<3'
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
        fontWeight:200, fontSize:'1rem',fontFamily:'Dosis',
      }
      let phoneSubHead = {
        fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative',color:'black',marginTop:'30px'
      }
     
      let subHead = {
        fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'0px', letterSpacing:3.4, 
      }
  return (
    <div className='routemap-content-container' style={{width:phone ? '100vw':'100%',display:'flex',justifyContent:!phone && 'center',position:phone ?'relative' : 'absolute', top:phone ? -'70px':'200px', left:phone ? 0:'50%',    transform:phone ? 'translate(0,120px)' : 'translate(-50%,0)',}}>
      <div className='routemap-avatar' style={{width:phone ? '300px' :'40%',transform:!phone &&'scale(0.9)',alignSelf:!phone &&'flex-end',position:phone && 'absolute', left:phone &&'-110px',}} >
<img src={img} alt='avatar' style={{width:phone ? '100%':'65%',height:phone ? '100%':'75vh',zIndex:10, objectFit:'cover',transform:phone ? 'translateY(-150px)' : 'translateX(20%)'}} />
</div>
<div className='routemap-content-wrapper' style={{width:!phone &&'800px',height:!phone &&'75vh', backgroundColor:'white',opacity:0.8,transform:!phone && 'translateX(-15%)', display:phone && 'flex', flexDirection: phone && 'column' }}>
 
<motion.button
               style={{backgroundColor:'black',width:'100%',fontFamily:'Bree Serif', fontSize:'0.8rem', color:'white',height:phone ? 50 :40,letterSpacing:'0.5rem', }}
               onClick={onMapClose}
               whileHover={{backgroundColor:'white',opacity:1, color:'black',}}

               >
                <span style={{marginLeft:30}}>BACK TO MAP</span>
               </motion.button>
 <div style={{width:phone ? '100vw':'100%', display:'flex', flexDirection:'column', backgroundColor:'white', justifyContent:phone ?'flex-start':'flex-start', alignItems:phone ? 'flex-start' :'center', opacity:0.95, height:phone ? '100vh':'100%', }}>
   <div style={{marginLeft:phone ? '10%' :'14%',width:'82%',marginTop:phone ? 30 : 0}}>
   <h2  style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.8rem':'2.3rem'}}>Community</h2>

   
     <span style={{...phone ? phoneStyle : style,display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column',width:phone ? '90%':'90%'}}>
     <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4,marginLeft:phone && 2}}>KynStarter</span>

<span style={{marginLeft:30}}>Have a dopeass idea that will benefit the community / web3 space?<br/> </span>
<span style={{marginLeft:30, marginTop:10}}>KynStarter will provide you with the necessary resources to get there.</span>
  <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4,marginLeft:phone && 2}}>Music Album<br/></span>

  <span style={{marginLeft:30}}>Our very own KYN Album - an album to rally us together.<br/> </span>
<span style={{marginLeft:30, marginTop:10}} >Created hand-in-hand with the community {heart}</span>
 <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4,marginLeft:phone && 2}}>Fully-Committed Mods
<br/></span>
<span style={{marginLeft:30}}>The human embodiment of the KYN brand. Mods will be the foundation for the wholesome family culture in KYN.</span>

     </span>
   <br/>
   <br/>
   </div>
 </div>
</div>
</div>
  )
}

export default Card4
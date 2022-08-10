import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import {motion} from 'framer-motion'
const place = require('./Avatars/web art dreammap bri connecting people.webp')
const Card7 = ({onMapClose}) => {
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
        fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', letterSpacing:3.4, 
      }
  return (
    <div className='routemap-content-container' style={{width:phone ? '100vw':'100%',display:'flex',justifyContent:!phone && 'center',position:phone ?'relative' : 'absolute', left:phone ? 0:'50%',    transform:phone ? 'translate(0,190px)' : 'translate(-50%,0)',top:phone ? '-70px':200 }}>
    <div className='routemap-avatar' style={{width:phone ? '300px' :'35%',transform:!phone &&'scale(0.9)',alignSelf:!phone &&'flex-end',position:phone && 'absolute', left:phone &&'-110px'}} >
<img src={place} alt='avatar' style={{width:phone ? '100%':'350px',height:phone ? '100%':'75vh',zIndex:10, objectFit:'cover',transform:phone ? 'translateY(-130px)' : 'translateX(30px)'}} />
</div>
<div className='routemap-content-wrapper' style={{width:!phone &&'800px',height:!phone &&'75vh',overflow:'scroll', backgroundColor:'white',opacity:0.8,transform:!phone && 'translateX(-15%)', display:phone && 'flex', flexDirection: phone && 'column' }}>
 
  <motion.button
  style={{backgroundColor:'black',width:'100%',fontFamily:'Bree Serif', fontSize:'1.2rem', color:'white',position:'sticky'}}
  onClick={onMapClose}
  whileHover={{backgroundColor:'rgba(220,220,220,0.5)',opacity:1, color:'black'}}
  >
   BACK TO MAP
  </motion.button>
 <div style={{width:phone ? '100vw':'100%', display:'flex', flexDirection:'column', backgroundColor:'white',justifyContent:phone ?'flex-start':'flex-start', alignItems:phone ? 'flex-start' :'center', opacity:0.95, height:phone ? '100vh':'100%', }}>
   <div style={{marginLeft:phone ? '10%' :'10%',width:'82%',marginTop:phone&&30}}>
    <h2 style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.8rem':'2.5rem'}}>Connecting People</h2>

   
   <span style={{...phone ? phoneStyle : style,display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column',width:phone ? '90%':'90%'}}>
   <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>Quest Board (Matching Holders with Holders)</span>  <br/>
<span style={{marginLeft:30}}>
   Holders can post their "quest" in this format: <br/><br/>

    1. The problem<br/>
      2. What help you are looking for<br/>
      3. Compensation you are offering<br/><br/>

The community then volunteers their expertise to help.
<br/></span>

 <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>Assistants Agency<br/> (Matching Holders with Assistants)</span>  <br/>

 <span style={{marginLeft:30}}>A system created for builders: an army of assistants <br/>& freelancers at your disposal.</span>

<span style={{marginTop:10,marginLeft:30}}>As builders trying to break free of the system, cash flow can be tight.</span>

<span style={{marginTop:10,marginLeft:30}}>To use the services of our assistants and freelancers, <br/>you do not need to fork out any cash.</span>

<span style={{marginLeft:30,marginTop:10}}>Instead, they will receive a % stake in your project as payment, <br/>allowing you to scale without too much overhead.</span>


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

export default Card7
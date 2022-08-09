import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import {motion,AnimatePresence} from 'framer-motion'
const place = require('./Avatars/web art dreammap bri tbe.png')
const Card6 = ({onMapClose}) => {
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
        fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'0px', letterSpacing:3.4, 
      }
  return (
    <div className='routemap-content-container' style={{width:phone ? '100vw':'100%',display:'flex',justifyContent:!phone && 'center',position:phone ?'relative' : 'absolute', top:phone ? 0:'200px', left:phone ? 0:'50%',    transform:phone ? 'translate(0,190px)' : 'translate(-50%,0)',top:phone ? '-70px':200 }}>
    <div className='routemap-avatar' style={{width:phone ? '70vw' :'35%',transform:!phone &&'scale(0.9)',alignSelf:!phone &&'flex-end',position:phone && 'absolute', left:phone &&'-110px'}} >
<img src={place} style={{width:phone ? '100%':'350px',height:phone ? '100%':'75vh',zIndex:10, objectFit:'cover',transform:phone ? 'translateY(-140px)' : 'translateX(40px)'}} />
</div>
<div className='routemap-content-wrapper' style={{width:!phone &&'800px',height:!phone &&'70vh',overflow:'scroll', backgroundColor:'white',opacity:0.8,transform:!phone && 'translateX(-15%)', display:phone && 'flex', flexDirection: phone && 'column' }}>
 
  <motion.button
  style={{backgroundColor:'black',width:'100%',fontFamily:'Bree Serif', fontSize:'1.2rem', color:'white'}}
  onClick={onMapClose}
  whileHover={{backgroundColor:'rgba(220,220,220,0.5)',opacity:1, color:'black'}}
  >
   BACK TO MAP
  </motion.button>
 <div  style={{width:phone ? '100vw':'100%', display:'flex', flexDirection:'column', backgroundColor:'white',justifyContent:phone ?'flex-start':'flex-start', alignItems:phone ? 'flex-start' :'center', opacity:0.95, height:phone ? '100vh':'100%', }}>
   <div style={{marginLeft:phone ? '10%' :'10%',width:'82%',marginTop:phone && 30}}>
    <h2 style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.8rem':'2.5rem'}}>To Be Explored</h2>
 
   
   <span  style={{...phone ? phoneStyle : style,display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column',width:phone ? '90%':'90%'}}>
   <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4,}}>Social Gaming</span>    

    <span  style={{marginLeft:30}}> Social RPG Game centered around KYN.</span>



<span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>$KYN</span>   
<span  style={{marginLeft:30}}>A sustainable token economy requires a strong foundation and purpose for it.</span> 

<span  style={{marginLeft:30}}>Until then, we will not rush out a token release.  </span>

 <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>NFT Staking</span>   

 <span  style={{marginLeft:30}}>People who stake their NFTs might be eligible for special rewards.</span>
 <span style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>Open World Metaverse</span>   
 <span style={{marginLeft:30}}>Let's be real. We don't have billion-dollar budgets to compete with big web2 companies like Adidas, Meta or NVIDIA.
<br/>
Instead, we'll wait for a dominant metaverse to emerge before bringing KYNs in to hang out with the rest of the web3 community. 
<br/>
In the meantime, you can find us in our real life sanctuaries :)</span>




     </span>

   <br/>
   <br/>
   </div>
 </div>
</div>
</div>
  )
}

export default Card6
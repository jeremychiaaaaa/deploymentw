import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import {motion} from 'framer-motion'

const Card5 = ({onMapClose,img}) => {
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
        fontWeight:200, fontSize:'1 rem',fontFamily:'Dosis',
      }
      let phoneSubHead = {
        fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative',color:'black',marginTop:'30px'
      }

      let subHead = {
        fontWeight:900, fontSize:'3.0rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'0px', letterSpacing:3.4, 
      }
  return (
    <div className='routemap-content-container' style={{width:phone ? '100vw':'100%',display:'flex',justifyContent:!phone && 'center',position:phone ?'relative' : 'absolute', left:phone ? 0:'50%',    transform:phone ? 'translate(0,190px)' : 'translate(-50%,0)',top:phone ? '-70px':200 }}>
        <div className='routemap-avatar' style={{width:phone ? '300px' :'40%',transform:!phone &&'scale(0.9)',alignSelf:!phone &&'flex-end',position:phone && 'absolute', left:phone &&'-110px',}} >
<img src={img} alt='avatar' style={{width:phone ? '100%':'65%',height:phone ? '100%':'75vh',zIndex:10, objectFit:'cover',transform:phone ? 'translateY(-150px)' : 'translateX(20%)'}} />
</div>
<div className='routemap-content-wrapper' style={{width:!phone &&'800px',height:!phone &&'75vh', backgroundColor:'white',opacity:0.8,overflow:!phone && 'scroll',transform:!phone && 'translateX(-15%)', display:phone && 'flex', flexDirection: phone && 'column' }}>
 
<motion.button
               style={{backgroundColor:'black',width:'100%',fontFamily:'Bree Serif', fontSize:'0.8rem', color:'white',height:phone ? 50 :40,letterSpacing:'0.5rem', }}
               onClick={onMapClose}
               whileHover={{backgroundColor:'white',opacity:1, color:'black',}}

               >
                <span style={{marginLeft:30}}>BACK TO MAP</span>
               </motion.button>
 <div  style={{width:phone ? '100vw':'100%', display:'flex', flexDirection:'column', backgroundColor:'white',justifyContent:phone ?'flex-start':'flex-start', alignItems:phone ? 'flex-start' :'center', opacity:0.95, height:phone ? '100vh':'100%', }}>
   <div style={{marginLeft:phone ? '10%' :'14%',width:'82%',marginTop:phone && 40}}>
    <h2 style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.8rem':'2.3rem'}}>Education</h2>

   
   <span style={{...phone ? phoneStyle : style,display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column',width:phone ? '90%':'90%'}}>
   <span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>Seminars</span> 

  <span style={{marginLeft:30}}> For the learners among us who strive to become{!phone && <br/>} the best version of themselves. </span> 

<span  style={{marginLeft:30,marginTop:10}} >We will only hold these if we can get big names on board{!phone && <br/>} that will value-add to our community.</span>





<span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>Business Adventure Camp</span> 

<span style={{marginLeft:30}}>In-person, team-bonding type camp where famous speakers will be invited.</span>
<span style={{marginLeft:30,marginTop:10}}> Network and learn from the best!</span>
 <br/>
<br/>
 

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

export default Card5
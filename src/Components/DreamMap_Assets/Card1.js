import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import {motion,} from 'framer-motion'

const Card1 = ({onMapClose,img}) => {
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    useEffect(() => {
        window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
        WebFont.load({
          google: {
            families: ['Bree Serif','Dosis','Smooch Sans']
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
    <div className='routemap-content-container' style={{width:phone ? '100vw':'100%',display:'flex',justifyContent:!phone && 'center',position:phone ?'relative' : 'absolute',  left:phone ? 0:'50%',    transform:phone ? 'translate(0,190px)' : 'translate(-50%,200px)',top:phone ? '-70px':0 }}>
                   <div className='routemap-avatar' style={{width:phone ? '300px' :'40%',transform:!phone &&'scale(0.9)',alignSelf:!phone &&'flex-end',position:phone && 'absolute', left:phone &&'-110px',}} >
<img src={img} alt='avatar' style={{width:phone ? '100%':'65%',height:phone ? '100%':'75vh',zIndex:10, objectFit:'cover',transform:phone ? 'translateY(-150px)' : 'translateX(20%)'}} />
</div>
            <div className='routemap-content-wrapper' style={{width:!phone &&'800px',height:!phone &&'75vh',overflow:!phone &&'scroll', backgroundColor:'white',opacity:0.8,transform:!phone && 'translateX(-15%)', display:phone && 'flex', flexDirection: phone && 'column', }}>
              
               <motion.button
               style={{backgroundColor:'black',width:'100%',fontFamily:'Bree Serif', fontSize:'0.8rem', color:'white',height:phone ? 50 :40,letterSpacing:'0.5rem', }}
               onClick={onMapClose}
               whileHover={{backgroundColor:'white',opacity:1, color:'black',}}

               >
                <span style={{marginLeft:30}}>BACK TO MAP</span>
               </motion.button>
              <div style={{width:phone ? '100vw':'100%', display:'flex', flexDirection:'column', backgroundColor:'white', justifyContent:phone ?'flex-start':'flex-start', alignItems:phone ? 'flex-start' :'center', opacity:0.95, height:phone ? '100vh':'100%', }}>
                <div style={{marginLeft:phone ? '10%' :'14%',width:'82%'}}>
                 <h2 style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.8rem':'2.3rem',marginTop:phone ? 60 :20}}>KYN's Vision</h2>
                
                <div style={{display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column',width:phone ? '100%':'90%'}}>
                <span style={{...phone ? phoneStyle : style,}}>To cultivate a supportive, synergistic, wholesome family in a safe space where we grow towards our fullest potential together
             
             </span>
                <h2 style={{...phone ? phoneSubHead : subHead,fontSize:phone ? '1.5rem':'2.3rem'}}>KYN's Guiding Principles</h2>
                <span style={{...phone ? phoneStyle : style,display:'flex', flexDirection:'column', width:'100%'}}>
              <span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>1. Community, Community, Community</span>   

<span style={{marginLeft:30}}>Without the community, anything and everything we do will be meaningless. </span>
<span style={{marginLeft:30,marginTop:10}}>Though
overused and cliché, community will always be our #1 priority.</span>
<span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>2. Redefine Norms</span>

<span style={{marginLeft:30}}>We choose to stay true to ourselves, even when it goes against the norm.  </span>
<span style={{marginLeft:30, marginTop:10}}>Normalcy was never meant for us because we are meant for so much more. </span>
<span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>3. Endgame Mentality</span>

<span style={{marginLeft:30}}>Always have the end in mind.<br/></span> 
<span style={{marginLeft:30,marginTop:10}}>Never allow yourself to lose sight of the bigger picture.</span>

<span  style={{...subHead, fontSize:phone ?'1.05rem' :'1.3rem',letterSpacing:phone ? 0 :3.4}}>4. Kaizen</span>

<span style={{marginLeft:30}}>KYNs are always hungry to learn, hungry to grow; always striving to become a better
version of ourselves than yesterday.</span>




                </span>
                <div style={{height:100}}></div>
                </div>
                        

                
                </div>
              </div>
        
            </div>
            </div>
  )
}

export default Card1
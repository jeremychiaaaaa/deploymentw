import React, {useState, useEffect, useRef} from 'react'

import styled, { keyframes } from 'styled-components'
import {motion} from 'framer-motion'
import { wrapGrid } from 'animate-css-grid'
import { CSSTransition } from 'react-transition-group';
import WebFont from 'webfontloader';
const image1 = require('./KYN navi icon education TEXT.jpg')
export default function RouteMap2(){
    let style={
        fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis',marginLeft:'10px'
      }
      let phoneStyle={
        fontWeight:200, fontSize:'1.1rem',fontFamily:'Dosis',marginLeft:'10px'
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
        fontWeight:900, fontSize:'1.6rem',fontFamily:'Bree Serif',position:'relative', marginTop:'20px', marginLeft:'10px', letterSpacing:4.4, 
      }
    const[openCard, setOpenCard] = useState(-1)
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    useEffect(() => {
        window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
         WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka','Roboto Condensed', 'Smooch Sans', 'Oswald','PT Sans Narrow','Bree Serif', "Exo", 'Patua One', 'Teko', 'Cuprum', 'Share', 'Jockey One','Dosis']
          }
        });
       
       }, [])

       console.log(openCard)
    return(
        <div style={{height:'100vh'}}>

       
        <div className='routemap-parent'>
   {phone ? (
       <>
    <div style={{  display:'flex',top:140,position:'relative', flexDirection:'column' }}>
           <h1 style={{...subHead, fontSize:'2.3rem',color:'black', position:'relative',marginLeft:20,top:10}}>DREAM MAP</h1>
           <p style={{...style, opacity:openCard !== - 1 && 0,fontSize:'1rem', position:'relative',marginLeft:20,marginRight:20}}>KYN’s dreams and aspirations listed in a humble document. These are the things that keep us up at night and keep us going during the day. It might seem impossible but we are here for a reason. And we are here, to show the world that we will make the impossible possible. Normalcy was never meant for us. WGMI</p>
        
           </div>
       <div className='mindmap-container-phone'>
           <div className={openCard === 1 ? 'mindmap-active-phone-1' : 'mindmap-phone-1'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip1' onClick={() => setOpenCard(1)}>
                    
                   </div>
                   {openCard === 1 && (
                         <div className='mindmap-phone-content'>
                         <div className='mindmap-header'>
 
                   
                           
 <span className='mindmap-content-header' style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px'}}>VISION & VALUES</span>
 
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>
 
 </div>
 <div className='mindmap-content-body'>
 <h3 style={{...subHead, marginTop:10,fontSize:'1.3rem'}}>VISION</h3>
 <span style={phoneStyle}> 1. Empower people to achieve their crazy big dreams</span>
 <br/>
 <span style={phoneStyle}> 2. Be the best versions of ourselves - individually and as a community</span>
 <br/><span style={phoneStyle}> 3. The ever-cultivation of a healthy, wholesome and supportive culture.</span>
 <h3 style={phoneSubHead}>VALUES</h3>
 <span style={phoneStyle}> 1. As cliche as it sounds, it is undeniable that the KYN community will be the most
 valuable asset of this project. Strong alone, unstoppable together. This mentality will
 be the core essence of all our successes.</span><br/>
 <span style={phoneStyle}> 2. Acknowledging that the web3 space is an ever-changing platform, we strive to be
 relentlessly adaptive and tackle all problems with new innovative solutions.</span>
 <br/><span style={phoneStyle}>3. Normalcy was never meant for us. We are crazy but we are the ones who will change
 the landscape.</span>
 
 
 
 
 </div>           
                       
                         </div>
            )}
               </div>
               <div className={openCard === 2 ? 'mindmap-active-phone-1' : 'mindmap-phone-2'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip2' onClick={() => setOpenCard(2)}>
                   
                   </div>
                   {openCard === 2 && (
                      <div className='mindmap-phone-content'>
                      <div className='mindmap-header'>

                  
                          
                            <span className='mindmap-content-header' style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px'}}>COMMUNITY</span>
 
                        
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>
        <h3 style={{...phoneSubHead,}}>KYN STARTER</h3>
        <p style={style}> Have a dopeass idea to benefit the community / the web3 space? Kynstarter will provide you
the necessary resources to get there together.</p>

       <h3 style={phoneSubHead}>KYN MUSIC ALBUM</h3>
       <span style={phoneStyle}>
       We will have our very own Kyn’s Anthem - our rallying call to unite as one. We will provide the
initial anthem and the community will help create the rest of the album.
       </span>
       
<h3 style={phoneSubHead}>FULLY - COMMITTED MODS</h3>
<span style={phoneStyle}> The human representation of our brand. Our frontline, our ambassadors, the embodiment of
the KYN brand. They will be the rock hard foundation for the strong culture we envision to
cultivate.</span>
<h3 style={{...phoneSubHead, textTransform:'capitalize',}}>REGULAR MEET-THE-PEOPLE SESSIONS</h3>
<span style={{...phoneStyle, }}> The KYN’s founding team is committed to being on the ground with the community 24/7 . Any
valid concerns or suggestions raised will be taken seriously. Actions Plans will be implemented
to set these in motion. Together, we will build the sanctuary from the ground up.</span>

        </div>           
                    
                      </div>
            )} 
               </div>
               <div className={openCard === 3 ? 'mindmap-active-phone-1' : 'mindmap-phone-3'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip3' onClick={() => setOpenCard(3)}>
                   
                   </div>
                   {openCard === 3 && (
                           <div className='mindmap-phone-content'>
                           <div className='mindmap-header'>
   
                       
                               
                                 <h1 className='mindmap-content-header' style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px'}}>IRL Sanctuary</h1>
                             
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

     
   </div>
       <div className='mindmap-content-body'>
           
          <h3 style={phoneSubHead}>REAL-LIFE SANCTUARIES</h3>
          <span style={phoneStyle}>
          We intend to have private properties, ranging from villas to castles around the globe. These
  KYN-owned properties will serve as :  </span>
  
  <span style={phoneStyle}>- Kyn's International HQs</span>
  <span style={phoneStyle}>- Hang out spots</span> 
  <span style={phoneStyle}>- Safe spaces</span>
  <span style={phoneStyle}>Our eventual long term goal is to have multiple sanctuaries across the globe for all to access
  easily.</span>
  
  <h3 style={phoneSubHead}>REAL LIFE LAND SALE</h3>
  <span style={phoneStyle}>Instead of a virtual land sale, we will have a physical land sale. We intend to buy a castle with
  a HUGE estate (think 350 football fields and above)</span>
  
           </div>           
                         
                           </div>
            )}     
               </div>
               <div className={openCard === 4 ? 'mindmap-active-phone-1' : 'mindmap-phone-4'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip4' onClick={() => setOpenCard(4)}>
                   
                   </div>
                   {openCard === 4 && (
                            <div className='mindmap-content'>
                    
                            <div className='mindmap-header'>
         
                             
                                     
         <h1 className='mindmap-content-header' style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px'}}>FESTIVALS</h1>
     
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>
        
        </div>
        <div className='mindmap-content-body'>
        
        <h3 style={phoneSubHead}>CARNIVAL + RAVE</h3>
        <span style={phoneStyle}>
        KYN-themed carnivals & raves will be organised and hosted near our private sanctuaries. The intention of doing so is to allow fellow kyns to be able to enjoy both the events and the sanctuary at the same time.  </span>
        <br/>
        
        <span style={phoneStyle}>Tickets will be in the form of physical and NFT copies</span>
        
        <br />
        <span style={phoneStyle}>As plenty of precise planning has to be undergone first, more concrete information can only be shared in the future. </span>
        <br/>
        <span style={phoneStyle}>However, stay tune for it as it will be an experience that you would not want to miss out on.</span>
        
        </div>           
        
        
                              </div>
            )}         
               </div>
               <div className={openCard === 5 ? 'mindmap-active-phone-1' : 'mindmap-phone-5'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip5' onClick={() => setOpenCard(5)}>
                   
                   </div>
                   {openCard === 5 && (
                        <div className='mindmap-content'>
                        <div className='mindmap-header'>
  
                      
                              
  <h1 className='mindmap-content-header'  style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px'}}>PHYSICAL BRAND</h1>
 
  
  <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>
        
 </div>
 <div className='mindmap-content-body'>
 
 <h3 style={phoneSubHead}>WELCOME MERCH</h3>
 <span style={phoneStyle}>
 To welcome and make everyone in the KYN community feel like home, an exclusive mystery
 welcome box will be physically mailed to all verified Kyns.
 Screenshot date TBA. </span>
 <h3 style={phoneSubHead}>PHYSICAL POPUPS IN ICONIC PLACES</h3>
 
 <span style={phoneStyle}>To spread our KYN movement across the globe, we will set up pop-up shops at iconic tourist
 spots.</span>
 <h3 style={phoneSubHead}>BLOCKCHAIN VERIFIABLE MERCH</h3>
 
 <span style={phoneStyle}>Scannable QR codes will be aesthetically designed into most of our merch, verifiable on the
 blockchain. And, who knows? Maybe being a verified owner of a certain merch could grant you
 extra perks…</span>
 
 <h3 style={phoneSubHead}>LIMITED TIME MERCH SHOPS</h3>
 
 <span style={phoneStyle}>Dopeass designs. Special collaborations. Limited edition. Only up for a few days, then gone.</span>
 </div>           
                     
                       </div>
            )}              
               </div>
               <div className={openCard === 6 ? 'mindmap-active-phone-1' : 'mindmap-phone-6'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip6' onClick={() => setOpenCard(6)}>
                   
                   </div>
                   {openCard === 6 && (
 <div className='mindmap-content'>
 <div className='mindmap-header'>



<h1 className='mindmap-content-header'  style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px'}}>COLLECTIBLES</h1>

 
<button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>

<h3 style={phoneSubHead}>COMMUNITY COMIC BOOK</h3>
<span style={phoneStyle}>
We will have our very own KYN-inspired comic book. 100% made by KYN. It will exist in both
NFT and physical forms. The general storyline and art will be sourced from the community.
From there, we will fractionalised the comic book. The community will have 100% control on
its development. <br/>Make an anime? Sell merch? Create a game? Lock it in a 100-year time
capsule? You decide.The possibilities are endless. </span>
<br />
<span style={phoneStyle}>
All proceeds will go back to furthering the development of this endeavor. </span>

<h3 style={phoneSubHead}>TOY FIGURINES</h3>

<span style={phoneStyle}>Tabletop toys placed on your workdesk. A reassuring, heartwarming reminder that you are a
part of The Sanctuary.</span>

</div>


</div>
            )}                   
               </div>
               <div className={openCard === 7 ? 'mindmap-active-phone-1' : 'mindmap-phone-7'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip7' onClick={() => setOpenCard(7)}>
                   
                   </div>
                   {openCard === 7 && (
                               <div className='mindmap-content'>
                               <div className='mindmap-header'>
       
                           
                                   
       <h1 className='mindmap-content-header' style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px'}}>METAVERSE</h1>
      
   
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>
      
      </div>
      <div className='mindmap-content-body'>
      
      <h3 style={phoneSubHead}>OPEN WORLD METAVERSE</h3>
      <span style={phoneStyle}>
      Let's be real, we don't have billion-dollar budgets to compete with big web2 companies like
      Adidas, Nike, Riot Games or NVIDIA. Instead, we'll wait for these giants to create them before
      bringing our fellow Kyns in to hang out with the rest of web3 communities. In the meantime,
      you can find Kyns in The Sanctuaries :) </span>
      
      
      <h3 style={phoneSubHead}>MINI MOBILE GAMES</h3>
      
      <span style={phoneStyle}>Addictive game to unwind after a long day, or to socialise with other Kyns. We will research,
      design, and experiment addictive gameplay loops before we ever start on this endeavor.</span>
      
      </div>
                            </div>
            )}                         
               </div>
               <div className={openCard === 8 ? 'mindmap-active-phone-1' : 'mindmap-phone-8'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip8' onClick={() => setOpenCard(8)}>
                   
                   </div>
                   {openCard === 8 && (
                          <div className='mindmap-content'>
                          <div className='mindmap-header'>

             
                     
<h1 className='mindmap-content-header' style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px'}}>EDUCATION</h1>

 
<button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>
</div>
<div className='mindmap-content-body'>

<h3 style={phoneSubHead}>SEMINARS</h3>
<span style={phoneStyle}>
We understand the importance of education. It empowers us by granting us essential knowledge to be the best versions of ourselves. 
<br/>
<br/>
As such, we will host valuable seminars, led by experts to bring all kyns to the next level. 
<br />
<br/>
These seminars will be hosted both IRL and online.
<br/>
<br/>
The topic for discussion will be chosen by the community and we will organise our seminars around it. </span>


</div>
            
            
              </div>
            )}                                 
               </div>
               <div className={openCard === 9 ? 'mindmap-active-phone-1' : 'mindmap-phone-9'} onClick={e => e.stopPropagation()}>
               <div className='mindmap-phone clip9' onClick={() => setOpenCard(9)}>
                   
                   </div>
                   {openCard === 9 && (
                         <div className='mindmap-content'>
                         <div className='mindmap-header'>

                    
                            
<h1 className='mindmap-content-header'  style={{...subHeaderStyle, fontSize:'2.2rem',marginBottom:'20px',}}>TO BE EXPLORED</h1>


 
<button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>
</div>
<div className='mindmap-content-body'>
<span style={phoneStyle}>Misc. ideas of we want to explore in the future.</span>
<h3 style={phoneSubHead}>SOCIAL GAMING</h3>
<span style={phoneStyle}>
Social RPG Game centered around The Sanctuary </span>


<h3 style={phoneSubHead}>LOOT BOXES</h3>


<span style={phoneStyle}>
Drops will be in the form of NFTs, which will be burned upon usage, or could be sold on the
secondary market. Time will reveal their utilities. </span>

<h3 style={phoneSubHead}>$KYN</h3>


<span style={phoneStyle}>
A sustainable token economy requires a strong foundation to build upon. </span>
<br />

<span style={phoneStyle}>
Until then, we will not rush out a token release but rather focus on fundamentals to build out a
solid and robust foundation. </span>
</div>
                     </div>
            )}                           
               </div>
           </div>     </>
   ): <>
  <div style={{  display:'flex', justifyContent:'center',flexDirection:'column', alignItems:'center'}}>
           <h1 style={{...subHead, fontSize:'3.6rem',marginTop:100,color:'black'}}>DREAM MAP</h1>
        
            <p style={{...style, opacity:openCard !== - 1 && 0,width:'1020px',textAlign:'center'}}>KYN’s dreams and aspirations listed in a humble document. These are the things that keep us up at night and keep us going during the day. It might seem impossible but we are here for a reason. And we are here, to show the world that we will make the impossible possible. Normalcy was never meant for us. WGMI</p>
       </div>
   <div className='routemap-container' style={{transform: openCard !== - 1 ? 'translateY(-100px)': ''}}>
       
            <div className={openCard === 1 ? 'mindmap-container' : 'routemap-card-1'} onClick={(e) => e.stopPropagation() }>
                <div className='routemap-clip clip1' onClick={() => setOpenCard(1)}>
            
                </div>
                    {openCard === 1 && (
                    <div className='mindmap-content'>
                        <div className='mindmap-header'>

                  
                          
<span className='mindmap-content-header' style={{...subHeaderStyle, }}>VISION & VALUES</span>

 
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>
<h3 style={{...subHead, marginTop:0}}>VISION</h3>
<span style={{...style, marginLeft:'50px',}}> 1. Empower people to achieve their crazy big dreams</span>
<br/>
<span style={{...style, marginLeft:'50px',}}> 2. Be the best versions of ourselves - individually and as a community</span>
<br/><span style={{...style, marginLeft:'50px',}}> 3. The ever-cultivation of a healthy, wholesome and supportive culture.</span>
<h3 style={subHead}>VALUES</h3>
<span style={{...style, marginLeft:'50px',}}> 1. As cliche as it sounds, it is undeniable that the KYN community will be the most
valuable asset of this project. Strong alone, unstoppable together. This mentality will
be the core essence of all our successes.</span><br/>
<span style={{...style, marginLeft:'50px',}}> 2. Acknowledging that the web3 space is an ever-changing platform, we strive to be
relentlessly adaptive and tackle all problems with new innovative solutions.</span>
<br/><span style={{...style, marginLeft:'50px',}}>3. Normalcy was never meant for us. We are crazy but we are the ones who will change
the landscape.</span>




</div>           
                      
                        </div>
                )}
            </div>
            <div className={openCard === 2 ? 'mindmap-container-2' : 'routemap-card-2'} onClick={(e) => e.stopPropagation() }>
            <div className='routemap-clip clip2' onClick={() => setOpenCard(2)}>
        
                </div>
                {openCard === 2 && (
                      <div className='mindmap-content'>
                      <div className='mindmap-header'>

                  
                          
                            <span className='mindmap-content-header' style={{...subHeaderStyle, }}>COMMUNITY</span>
  
                            <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>
        <h3 style={{...subHead, marginTop:0}}>KYN STARTER</h3>
        <p style={style}> Have a dopeass idea to benefit the community / the web3 space? Kynstarter will provide you
the necessary resources to get there together.</p>

       <h3 style={subHead}>KYN MUSIC ALBUM</h3>
       <span style={style}>
       We will have our very own Kyn’s Anthem - our rallying call to unite as one. We will provide the
initial anthem and the community will help create the rest of the album.
       </span>
       
<h3 style={subHead}>FULLY - COMMITTED MODS</h3>
<span style={style}> The human representation of our brand. Our frontline, our ambassadors, the embodiment of
the KYN brand. They will be the rock hard foundation for the strong culture we envision to
cultivate.</span>
<h3 style={{...subHead, textTransform:'capitalize',}}>REGULAR MEET-THE-PEOPLE SESSIONS</h3>
<span style={{...style, }}> The KYN’s founding team is committed to being on the ground with the community 24/7 . Any
valid concerns or suggestions raised will be taken seriously. Actions Plans will be implemented
to set these in motion. Together, we will build the sanctuary from the ground up.</span>

        </div>           
                    
                      </div>
                )}
            </div>
            <div className={openCard === 3 ? 'mindmap-container-3' : 'routemap-card-3'} onClick={(e) => e.stopPropagation() }>
            <div className='routemap-clip clip3' onClick={() => setOpenCard(3)}>
        
                </div>
            {openCard === 3 && (
                         <div className='mindmap-content'>
                         <div className='mindmap-header'>
 
                     
                             
                               <h1 className='mindmap-content-header' style={subHeaderStyle}>IRL Sanctuary</h1>
    
       
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>
   
 </div>
     <div className='mindmap-content-body'>
         
        <h3 style={subHead}>REAL-LIFE SANCTUARIES</h3>
        <span style={style}>
        We intend to have private properties, ranging from villas to castles around the globe. These
KYN-owned properties will serve as :  </span>

<span style={{...style, marginLeft:'50px', fontSize:'1.3rem'}}>- Kyn's International HQs</span>
<span style={{...style, marginLeft:'50px', fontSize:'1.3rem'}}>- Hang out spots</span> 
<span style={{...style, marginLeft:'50px', fontSize:'1.3rem'}}>- Safe spaces</span>
<span style={style}>Our eventual long term goal is to have multiple sanctuaries across the globe for all to access
easily.</span>

<h3 style={subHead}>REAL LIFE LAND SALE</h3>
<span style={style}>Instead of a virtual land sale, we will have a physical land sale. We intend to buy a castle with
a HUGE estate (think 350 football fields and above)</span>

         </div>           
                       
                         </div>
            )}
            </div>
            <div className={openCard === 4 ? 'mindmap-container-4' : 'routemap-card-4'} onClick={(e) => e.stopPropagation() }>
                <div className='routemap-clip clip4' onClick={() => setOpenCard(4)}>
        
                </div>
                {openCard === 4 && (
                      <div className='mindmap-content'>
                    
                    <div className='mindmap-header'>
 
                     
                             
 <h1 className='mindmap-content-header' style={subHeaderStyle}>FESTIVALS</h1>

 
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>

<h3 style={subHead}>CARNIVAL + RAVE</h3>
<span style={style}>
KYN-themed carnivals & raves will be organised and hosted near our private sanctuaries. The intention of doing so is to allow fellow kyns to be able to enjoy both the events and the sanctuary at the same time.  </span>
<br/>

<span style={style}>Tickets will be in the form of physical and NFT copies</span>

<br />
<span style={style}>As plenty of precise planning has to be undergone first, more concrete information can only be shared in the future. </span>
<br/>
<span style={style}>However, stay tune for it as it will be an experience that you would not want to miss out on.</span>

</div>           


                      </div>
                )}
            </div>
            <div className={openCard === 5 ? 'mindmap-container-5' : 'routemap-card-5'} onClick={(e) => e.stopPropagation() }>
                <div className='routemap-clip clip5' onClick={() => setOpenCard(5)}>
        
                </div>
                {openCard === 5 && (
                      <div className='mindmap-content'>
                       <div className='mindmap-header'>
 
                     
                             
 <h1 className='mindmap-content-header' style={subHeaderStyle}>PHYSICAL BRAND</h1>

 
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>

<h3 style={subHead}>WELCOME MERCH</h3>
<span style={style}>
To welcome and make everyone in the KYN community feel like home, an exclusive mystery
welcome box will be physically mailed to all verified Kyns.
Screenshot date TBA. </span>
<h3 style={subHead}>PHYSICAL POPUPS IN ICONIC PLACES</h3>

<span style={style}>To spread our KYN movement across the globe, we will set up pop-up shops at iconic tourist
spots.</span>
<h3 style={subHead}>BLOCKCHAIN VERIFIABLE MERCH</h3>

<span style={style}>Scannable QR codes will be aesthetically designed into most of our merch, verifiable on the
blockchain. And, who knows? Maybe being a verified owner of a certain merch could grant you
extra perks…</span>

<h3 style={subHead}>LIMITED TIME MERCH SHOPS</h3>

<span style={style}>Dopeass designs. Special collaborations. Limited edition. Only up for a few days, then gone.</span>
</div>           
                    
                      </div>
                )}
            </div>
            <div className={openCard === 6 ? 'mindmap-container-6' : 'routemap-card-6'} onClick={(e) => e.stopPropagation() }>
                <div className='routemap-clip clip6' onClick={()=> setOpenCard(6)}>
        
                </div>
                {openCard === 6 && (
                      <div className='mindmap-content'>
                                          <div className='mindmap-header'>
 
                     
                             
 <h1 className='mindmap-content-header' style={subHeaderStyle}>COLLECTIBLES</h1>

 
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>

<h3 style={subHead}>COMMUNITY COMIC BOOK</h3>
<span style={style}>
We will have our very own KYN-inspired comic book. 100% made by KYN. It will exist in both
NFT and physical forms. The general storyline and art will be sourced from the community.
From there, we will fractionalised the comic book. The community will have 100% control on
its development. <br/>Make an anime? Sell merch? Create a game? Lock it in a 100-year time
capsule? You decide.The possibilities are endless. </span>
<br />
<span style={style}>
All proceeds will go back to furthering the development of this endeavor. </span>

<h3 style={subHead}>TOY FIGURINES</h3>

<span style={style}>Tabletop toys placed on your workdesk. A reassuring, heartwarming reminder that you are a
part of The Sanctuary.</span>

</div>
             
                    
                      </div>
                )}
            </div>
            <div className={openCard === 7 ? 'mindmap-container-7' : 'routemap-card-7'} onClick={(e) => e.stopPropagation() }>
                <div className='routemap-clip clip7' onClick={() => setOpenCard(7)}>
        
                </div>
                {openCard === 7 && (
                      <div className='mindmap-content'>
                         <div className='mindmap-header'>
 
                     
                             
 <h1 className='mindmap-content-header' style={subHeaderStyle}>METAVERSE</h1>

 
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>

<h3 style={subHead}>OPEN WORLD METAVERSE</h3>
<span style={style}>
Let's be real, we don't have billion-dollar budgets to compete with big web2 companies like
Adidas, Nike, Riot Games or NVIDIA. Instead, we'll wait for these giants to create them before
bringing our fellow Kyns in to hang out with the rest of web3 communities. In the meantime,
you can find Kyns in The Sanctuaries :) </span>


<h3 style={subHead}>MINI MOBILE GAMES</h3>

<span style={style}>Addictive game to unwind after a long day, or to socialise with other Kyns. We will research,
design, and experiment addictive gameplay loops before we ever start on this endeavor.</span>

</div>
                      </div>
                )}
            </div>
            <div className={openCard === 8 ? 'mindmap-container-8' : 'routemap-card-8'} onClick={(e) => e.stopPropagation() }>
                <div className='routemap-clip clip8' onClick={() => setOpenCard(8)}>
        
                </div>
                {openCard === 8 && (
                      <div className='mindmap-content'>
                                  <div className='mindmap-header'>
 
                     
                             
 <h1 className='mindmap-content-header' style={subHeaderStyle}>EDUCATION</h1>

 
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>

<h3 style={subHead}>SEMINARS</h3>
<span style={style}>
We understand the importance of education. It empowers us by granting us essential knowledge to be the best versions of ourselves. 
<br/>
<br/>
As such, we will host valuable seminars, led by experts to bring all kyns to the next level. 
<br />
<br/>
These seminars will be hosted both IRL and online.
<br/>
<br/>
The topic for discussion will be chosen by the community and we will organise our seminars around it. </span>


</div>
                    
                    
                      </div>
                )}
            </div>
            <div className={openCard === 9 ? 'mindmap-container-9' : 'routemap-card-9'} onClick={(e) => e.stopPropagation() }>
                <div className='routemap-clip clip9' onClick={() => setOpenCard(9)}>
        
                </div>
                {openCard === 9 && (
                      <div className='mindmap-content'>
                          <div className='mindmap-header'>
 
                     
                             
 <h1 className='mindmap-content-header' style={subHeaderStyle}>TO BE EXPLORED</h1>

 
 <button
 onClick={() => {
 setOpenCard(-1)
 
 
 }}
 className='button'
 ><span style={{fontSize:'2.1rem'}}>&times;</span></button>

</div>
<div className='mindmap-content-body'>
<span style={style}>Misc. ideas of we want to explore in the future.</span>
<h3 style={subHead}>SOCIAL GAMING</h3>
<span style={style}>
Social RPG Game centered around The Sanctuary </span>


<h3 style={subHead}>LOOT BOXES</h3>


<span style={style}>
Drops will be in the form of NFTs, which will be burned upon usage, or could be sold on the
secondary market. Time will reveal their utilities. </span>

<h3 style={subHead}>$KYN</h3>


<span style={style}>
A sustainable token economy requires a strong foundation to build upon. </span>
<br />

<span style={style}>
Until then, we will not rush out a token release but rather focus on fundamentals to build out a
solid and robust foundation. </span>
</div>
                      </div>
                )}
            </div>
    
     
            
        </div>
      
                 </> 
        }  
  
        </div> 
        </div>
    )
}
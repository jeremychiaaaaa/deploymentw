import React, {useState, useEffect, useRef} from 'react'

import styled, { keyframes } from 'styled-components'
import {motion} from 'framer-motion'
import { wrapGrid } from 'animate-css-grid'
import { CSSTransition } from 'react-transition-group';

function RouteMap() {
  const[openCard, setOpenCard] = useState(false)
  const[openCardContent, setOpenCardContent] = useState(false)
  const[openCard2, setOpenCard2] = useState(false)
  const[openCardContent2, setOpenCardContent2] = useState(false)
  const[openCardContent3, setOpenCardContent3] = useState(false)
  const[openCard3, setOpenCard3] = useState(false)
  const[openCard4, setOpenCard4] = useState(false)
  const[openCard5, setOpenCard5] = useState(false)
  const[openCard6, setOpenCard6] = useState(false)
  const[openCard7, setOpenCard7] = useState(false)
  const[phone,setPhone] = useState(window.matchMedia("(max-width: 1040px)").matches)
  useEffect(() => {
  window.matchMedia("(max-width: 1040px)").addEventListener('change', e => setPhone(e.matches))
 
 
 }, [])
  
 return(
   <>
 <div className='routemap-container'>
    <div className='routemap-header'>
      <h1>OUR DREAMS</h1>
      <p>The things that keep us awake at night and drive us to be the best versions during the day. TOGETHER, WE'LL ACHIEVE. TRUST THE PROCESS!</p>
    </div>
    <div className={phone ? 'routemap-active-card-1' : 'routemap-card-1'} onClick={(e) => e.stopPropagation() }>
    <div className={openCard ? 'routemap-active-clip clip1' : 'routemap-clip clip1'} data-title='X' onClick = {() => {
     if(phone){
       setOpenCard(!openCard)
      setOpenCard2(true)
      setOpenCardContent2(false)
      setOpenCardContent3(false)
      setOpenCardContent(true)
     }
     
      }}>
        


 
   <div className={phone ? 'routemap-active-content' : 'routemap-content'}>
   {openCardContent && (
     <>
     <div className='routemap-active-content-header'>
    
  
   
    <h2>01</h2>
     <button
     onClick={() => {
       setOpenCard(false)
 
      
     }}
     
     >X</button>
    </div>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>


</>
)}
{!phone && (
  <div className='routemap-content'>
  <h2>COMMUNITY</h2>
      
        <div className='routemap-individual-content-1'>
          
      <span style={{textDecoration:'underline', fontWeight:800}}>KynStarter</span>
<p>
We want to empower you to execute on your dopeass ideas to reach your next level of
success. <br/> If you have an excellent idea that will benefit the Kyn community or is relevant to the
Web3 space, <br/>KynStarter will provide you with the resources to execute it!
</p>
</div>
<div className='routemap-individual-content-2'>
<span style={{textDecoration:'underline',fontWeight:800}}>Fully-Committed Mods</span>
<p>
Mods are the first point of contact for many of our Kyns. In many ways, they are the human
representation of our brand. They are our frontline, our ambassadors, the embodiment of what
we stand for.
Onboarded mods are fully-committed and are true believers of the Kyn Movement.
Wholesome and dedicated, mods are first and foremost a Kyn before anything else.
</p>

</div>
<div className='routemap-individual-content-3'>

<span style={{textDecoration:'underline',fontWeight:800}}>Community Spaces</span>
  <p>
HTHT around a campfire, sharing hopes and dreams, fears and doubts.<br/> Supportive Kyns
encouraging one another and dispersing fears and doubts.<br/>
That's how we visualise our digital hangouts, forums and online spaces to be.<br/> Organic,
community-driven, and wholesome.<br/>
</p>
</div>
<div className='routemap-individual-content-4'>
<span style={{textDecoration:'underline',fontWeight:800}}>Regular Meet-The-People Sessions</span>
<p>
Founders who are too far removed and out-of-touch with the community will soon find their
movement start to crumble.<br/>
Kyn's Founding Team is committed to being on the ground with the people.<br/>
Regular Meet-The-People sessions will be held where Kyns can raise concerns with the
Founders.<br/> We will treat all valid concerns and suggestions with serious consideration and
implement actionable plans to address them.<br/>
Any Kyn member can also contact our Founders directly through their personal email.<br/>
Together, we will build the Sanctuary from the ground up.<br/>
</p>
</div>
<div className='routemap-individual-content-5'>
<span style={{textDecoration:'underline',fontWeight:800}}>Kyn Music Album</span>
<p>
As with every great movement, there has to be an anthem - a rallying call for us to rise up to
the challenge.<br/> A song for when we are at our lowest.<br/> Something to remind us why we started.<br/>
We'll provide the Kyn anthem, while the community will create complementary Kyn songs for
our Album.<br/>
This album will be the musical representation of who we are and what we stand for.
      </p>
</div>
  </div>
)
}
</div> 
 


   
    

    
      </div>
      
      <div className={phone && openCard ? 'routemap-active-clip clip2' : 'routemap-clip clip2'} onClick = {() => {
          setOpenCard(!openCard)
          setOpenCard2(true)
          setOpenCardContent2(true)
        setOpenCardContent(false)
        setOpenCardContent3(false)
        }}>
   <div className={phone ? 'routemap-active-content' : 'routemap-content'}>
   {openCardContent2 && (
     <>
  <div className='routemap-active-content-header'>
    
  
   
    <h2>02</h2>
     <button
     onClick={() => {
       setOpenCard(false)
      setOpenCardContent3(false)
       setOpenCardContent2(false)
       setOpenCardContent(false)
     }}
     
     >X</button>
    </div>
      <p>Hello</p>


</>
)}
{!phone && (
  <>
  <h2>02</h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

  </>
)
}
</div> 
 
      </div>
      <div className={phone && openCard ? 'routemap-active-clip clip3' : 'routemap-clip clip3'}  onClick = {() => {
          setOpenCard(!openCard)
         
          setOpenCard3(true)
          setOpenCardContent2(false)
          setOpenCardContent(false)
          setOpenCardContent3(true)
        }}>
         <div className={phone ? 'routemap-active-content' : 'routemap-content'}>
   {openCardContent3 && (
     <>
  <div className='routemap-active-content-header'>
    
  
   
    <h2>03</h2>
     <button
     onClick={() => {
       setOpenCard(false)

      
      
     }}
     
     >X</button>
    </div>
      <p>Hello</p>


</>
)}
{!phone && (
  <>
  <h2>03</h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

  </>
)
}
</div> 
 
      </div>
      
    </div>
    <div className={phone ? 'routemap-active-card-2' : 'routemap-card-2'}>
      <div className='routemap-clip clip4'>

      </div>
      <div className='routemap-clip clip5'>
        
      </div>
      <div className='routemap-clip clip6'>
        
      </div>
    </div>
    <div className={phone ? 'routemap-active-card-3' : 'routemap-card-3'}>
      <div className='routemap-clip clip7'>

      </div>
      <div className='routemap-clip clip8'>
        
      </div>
      <div className='routemap-clip clip9'>
        
      </div>
    </div>
  </div>
  </>
 )
  
}
    




export default RouteMap
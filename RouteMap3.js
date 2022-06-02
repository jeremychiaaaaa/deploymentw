import React, {useState, useEffect, useRef} from 'react'

import styled, { keyframes } from 'styled-components'
import {motion} from 'framer-motion'
import { wrapGrid } from 'animate-css-grid'
import { CSSTransition } from 'react-transition-group';


export default function RouteMap3(){
    const[openCard, setOpenCard] = useState(-1)
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1040px)").matches)
    useEffect(() => {
        window.matchMedia("(max-width: 1040px)").addEventListener('change', e => setPhone(e.matches))
       
       
       }, [])
       console.log(openCard)

       return(
        <div className='routemap-container'>
        <div className={openCard === 1 ? 'mindmap-container' : 'routemap-card-1'} onClick={(e) => e.stopPropagation() }>
            <div className='routemap-clip clip1' onClick={() => setOpenCard(1)}>
        
            </div>
                {openCard === 1 && (
                <div className='mindmap-content'>
                    <div className='mindmap-header'>

                
                        
                          <h1 className='mindmap-content-header'>1. Community Empowerment (Cheerleader pose. Female avatar sitting on 2 male avatars'
shoulders)</h1>

   <button
 onClick={() => {
setOpenCard(-1)

  
 }}
className='button'
 >X</button>

</div>
<div className='mindmap-content-body'>
    <h3 style={{fontWeight:600}}>Kyn Starter</h3>
    <span> - Have a dopeass idea to benefit the community / the web3 space?</span>
   <span>  - Kynstarter will provide you funds and resources to get there.</span>
   <h3>Kyn Music Album</h3>
   <span>
       - Our very own Kyn's Anthem - our rallying call to unite as one
   </span>
   <span> - We will provide the initial anthem.
</span>
<span> - Community creates the rest of the album</span>
    </div>           
                  
                    </div>
            )}
        </div>
        <div className={openCard === 2 ? 'mindmap-container' : 'routemap-card-2'} onClick={(e) => e.stopPropagation() }>
        <div className='routemap-clip clip1' onClick={() => setOpenCard(2)}>
    
            </div>
        </div>
        <div className={openCard === 3 ? 'mindmap-container-3' : 'routemap-card-3'} onClick={(e) => e.stopPropagation() }>
        <div className='routemap-clip clip1' onClick={() => setOpenCard(3)}>
    
            </div>
      
        </div>  {openCard === 3 && (
                     <div className='mindmap-content'>
                     <div className='mindmap-header'>

                 
                         
                           <h1 className='mindmap-content-header'>3. IRL Sanctuaries</h1>

    <button
  onClick={() => {
setOpenCard(-1)

   
  }}
 className='button'
  >X</button>

</div>
 <div className='mindmap-content-body'>
     
    <h3>The Concept</h3>
    <span>
    - "As terrifying and painful as reality can be, it's also... the only place that... you can get a
decent meal. Because, reality... is real." (James Halliday, Ready Player One, 2018)   </span>
<span>-  "Metaverse." An exciting word that brings to mind endless possibilities, worlds and realities.</span>
<span>-  While we are also thrilled at that thought, we recognise that the technology for a fully
immersive and interoperable metaverse like Ready Player One's will still not be here for many</span>
years to come.
<span>- In the meantime, we choose to focus on reality, because reality is still where we are going to
be spending most of our time.</span> 
 
  
     </div>           
                   
                     </div>
        )}
        <div className='routemap-card-4'>
            <div className='routemap-clip clip1'>
    
            </div>
        </div>
        <div className='routemap-card-5'>
            <div className='routemap-clip clip1'>
    
            </div>
        </div>
        <div className='routemap-card-6'>
            <div className='routemap-clip clip1'>
    
            </div>
        </div>
        <div className='routemap-card-7'>
            <div className='routemap-clip clip1'>
    
            </div>
        </div>
        <div className='routemap-card-8'>
            <div className='routemap-clip clip1'>
    
            </div>
        </div>
        <div className='routemap-card-9'>
            <div className='routemap-clip clip1'>
    
            </div>
        </div>

 
        
    </div>
       )
}
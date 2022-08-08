import React, {useState, useRef, useContext,useEffect, forwardRef} from 'react'

import Card1 from './DreamMap_Assets/Card1.js'
import Card2 from './DreamMap_Assets/Card2.js'
import Card3 from './DreamMap_Assets/Card3.js'
import Card4 from './DreamMap_Assets/Card4.js'
import Card5 from './DreamMap_Assets/Card5.js'
import Card6 from './DreamMap_Assets/Card6.js'
import Card7 from './DreamMap_Assets/Card7.js'
import Card8 from './DreamMap_Assets/Card8.js'

import { AudioContext } from '../App.js'
import { HeaderContext } from '../App.js'
import { ImageMap } from '@qiuz/react-image-map';
import WebFont from 'webfontloader';
import {motion,AnimatePresence} from 'framer-motion'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';

const phonebackground = require('./dreammap-mobile-bg.jpeg')
const trial = require('./dreammap_final.jpeg')



export default function DreamMap(){

    const phoneArea = [{"width":"15.646420824295005%","height":"8.202531645569623%","left":"16.485900216919728%","top":"5.11151295961421%"},
    {"width":"13.991323210412151%","height":"8.016877637130804%","left":"6.573684924078095%","top":"19.529837251356238%"},
    {"width":"13.34056399132321%","height":"7.474382157926461%","left":"23.601884490238607%","top":"29.475587703435806%"},
    {"width":"13.774403470715836%","height":"7.59493670886076%","left":"32.604053687635584%","top":"12.778782399035563%"},
    {"width":"14.859002169197394%","height":"7.59493670886076%","left":"7.332904013015186%","top":"37.79385171790236%"},  
    {"width":"13.123644251626898%","height":"7.05244122965642%","left":"11.996678416485903%","top":"65.70223025919229%"},
    {"width":"13.015184381778742%","height":"6.811332127787824%","left":"5.814465835140998%","top":"55.93731163351418%"},    
    {"width":"13.34056399132321%","height":"6.389391199517782%","left":"19.914248915401302%","top":"47.920433996383366%"},
  ]



    const area = [{"width":"2.739696312364424%","height":"3.5229885057471266%","left":"10.62906724511931%","top":"4.741379310344841%",style:{cursor: "pointer",display:'flex',justifyContent: 'center',}, onMouseEnter: () => setMouseOver1(1), onMouseLeave:() => setMouseOver1(-1),     render: (area, index) => 
     mouseOver1 === 1 && (
      <><div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}} className='mouse-one'>
          
      </div>
    
      </>

     )},{"width":"2.739696312364424%","height":"3.5229885057471266%","left":"24.144183839479393%","top":"15.086206896551724%",style:{cursor: "pointer",display:'flex',justifyContent: 'center',},
     onMouseEnter: () => setMouseOver1(2), onMouseLeave:() => setMouseOver1(-1),     render: (area, index) => 
     mouseOver1 === 2 && (
      <><div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}} className='mouse-two'>
          
      </div>
    
      </>

     )
    
    
    
    
    
    },
     {"width":"2.739696312364424%","height":"3.5229885057471266%","left":"37.81012744034707%","top":"8.045977011494253%",style:{cursor: "pointer",display:'flex',justifyContent: 'center',},
     
     onMouseEnter: () => setMouseOver1(3), onMouseLeave:() => setMouseOver1(-1),     render: (area, index) => 
     mouseOver1 === 3 && (
      <><div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}} className='mouse-three'>
          
      </div>
    
      </>

     )
    },
     {"width":"2.739696312364424%","height":"3.5229885057471266%","left":"12.213598156182211%","top":"24.42528735632184%",style:{cursor: "pointer",display:'flex',justifyContent: 'center',}
     ,
     onMouseEnter: () => setMouseOver1(4), onMouseLeave:() => setMouseOver1(-1),     render: (area, index) => 
     mouseOver1 === 4 && (
      <><div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}} className='mouse-four'>
          
      </div>
    
      </>

     )
    },
     {"width":"2.739696312364424%","height":"3.5229885057471266%","left":"53.64526843817787%","top":"6.0344827586206895%",style:{cursor: "pointer",display:'flex',justifyContent: 'center',}
     ,
     onMouseEnter: () => setMouseOver1(5), onMouseLeave:() => setMouseOver1(-1),     render: (area, index) => 
     mouseOver1 === 5 && (
      <><div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}} className='mouse-five'>
          
      </div>
    
      </>

     )
    },
     {"width":"2.739696312364424%","height":"3.5229885057471266%","left":"79.24179772234274%","top":"24.71264367816092%",style:{cursor: "pointer",display:'flex',justifyContent: 'center',}
    
     ,
     onMouseEnter: () => setMouseOver1(6), onMouseLeave:() => setMouseOver1(-1),     render: (area, index) => 
     mouseOver1 === 6 && (
      <><div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}} className='mouse-six'>
          
      </div>
    
      </>

     )
    },
     {"width":"2.739696312364424%","height":"3.5229885057471266%","left":"74.68648318872017%","top":"7.183908045977011%",style:{cursor: "pointer",display:'flex',justifyContent: 'center',}
    
     ,
     onMouseEnter: () => setMouseOver1(7), onMouseLeave:() => setMouseOver1(-1),     render: (area, index) => 
     mouseOver1 === 7 && (
      <><div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}} className='mouse-seven'>
          
      </div>
    
      </>

     )},
     {"width":"3.68763557483731%","height":"4.022988505747127%","left":"62.64743763557483%","top":"16.23563218390805%",style:{cursor: "pointer",display:'flex',justifyContent: 'center',}
     ,
     onMouseEnter: () => setMouseOver1(8), onMouseLeave:() => setMouseOver1(-1),     render: (area, index) => 
     mouseOver1 === 8 && (
      <><div style={{display:'flex',justifyContent: 'center',alignItems: 'center'}} className='mouse-eight'>
          
      </div>
    
      </>

     )
    } ]
   
    const [openCard,setOpenCard] = useState(0)
    const [mouseOver1,setMouseOver1]= useState(-1)
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    const onMapClick = (area, index) => {
    setOpenCard(index + 1)
    console.log(openCard)
    }
    const onMapClose = () => {
        setOpenCard(0)
    }  
    console.log(mouseOver1)
    useEffect(() => {
        window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka','Roboto Condensed','Bree Serif','Dosis','Smooch Sans']
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
    return(
        <>
        
          <div style={{height:'100vh',position:'absolute',overflow:'hidden',top:'80px',display:'flex', alignItems:'center',flexDirection:'column'}}>
          <div className='background-strip' style={{width:'100vw', height:phone ? 'fit-content':'110px',backgroundColor:'white', opacity:1,position:'relative',display:'flex',alignItems:phone ? 'flex-end' :'center',justifyContent:'center',gap:phone ? 15:25,flexDirection:phone ? 'column-reverse':'row',paddingBottom:phone ? 15 : 10,}}> 
<div style={{width:phone ? '90%' :'70%',display:'flex',opacity:phone ? openCard !== 0 ? 0 : 1 : 1 ,justifyContent:'flex-end'}}>
  <p style={{...phoneStyle,textAlign:'right',lineHeight:'1.3rem',fontFamily:'Smooch Sans',fontWeight:400,fontSize:phone ? '1.2rem':'1.3rem',marginRight:phone && '5%',}}>
  The Dream Map is a living mind map that evolves as KYN grows and develops. <br/>
It embodies our dreams and aspirations.<br/> Together, we will build The Sanctuary from the ground up. #WGMI
  </p>
</div>
<div style={{width:phone ? '90%' :'70%',display:'flex', justifyContent:phone ? 'flex-end':'flex-start',marginRight:phone && '5%', }}>
  <h2  style ={{...subHeaderStyle, fontSize:phone ? '2.1rem' : '4rem',color:'black',fontFamily:'Bree Serif',}}><span style={{fontFamily:'Bree Serif', fontWeight:100,opacity:0.2,fontSize:phone ? '2.1rem' : '4rem', }}>OUR</span>DREAMMAP</h2>
 </div>

  </div>
   
         <ImageMap className='imageMap'  onMapClick={onMapClick} src={phone ? phonebackground : trial} map={phone ? phoneArea : area} />
           
    </div>
        
  
        {openCard === 1 && (
            <Card1 onMapClose={onMapClose}/>
        )}
        {openCard === 2 && (
           
          <Card2 onMapClose={onMapClose} />
        )}
        {openCard === 3 && <Card3 onMapClose={onMapClose} />}
        {openCard === 4 && <Card4 onMapClose={onMapClose} />}
        {openCard === 5 && <Card5 onMapClose={onMapClose} />}
        {openCard === 6 && <Card6 onMapClose={onMapClose} />}
        {openCard === 7 && <Card7 onMapClose={onMapClose} />}
        {openCard === 8 && <Card8 onMapClose={onMapClose} />}
        </>
        
    )
}
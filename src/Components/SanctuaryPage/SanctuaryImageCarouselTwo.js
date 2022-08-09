import React, {useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import Villa1 from './Villa-2-pics/villa1.webp'
import Villa2 from './Villa-2-pics/villa2.webp'
import Villa3 from './Villa-2-pics/villa3.webp'
import Villa4 from './Villa-2-pics/villa4.webp'
import Villa5 from './Villa-2-pics/villa5.webp'
import Villa6 from './Villa-2-pics/villa6.webp'
import Villa7 from './Villa-2-pics/villa7.webp'
import Villa8 from './Villa-2-pics/villa8.webp'
import Villa9 from './Villa-2-pics/villa9.webp'
import Villa10 from './Villa-2-pics/villa10.webp'
import Villa11 from './Villa-2-pics/villa11.webp'
import Villa12 from './Villa-2-pics/villa12.jpeg'
import Villa13 from './Villa-2-pics/villa13.webp'
import Villa14 from './Villa-2-pics/villa14.webp'
import Villa15 from './Villa-2-pics/villa15.jpeg'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
const SanctuaryImageCarouselTwo = () => {
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)

    useEffect(() => {
      
      window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
    },[])




  return (
    <div className='villa-1-image-wrapper'>
      
    <div className='villa-1-image'>
    <Carousel
    animation='slide'
    duration={400}
    navButtonsAlwaysVisible={true}
    stopAutoPlayOnHover={false}
    NavButton={({onClick, className, style, next, prev}) => {
      // Other logic

      return (
          <Button onClick={onClick} className={className} style={style}>
              {next && 
              
              <div style={{backgroundColor:'white',width:'3.5rem',height:'100%',display:'flex', justifyContent:'center',alignItems:'center'}}>
              
              <span style={{color:'white',position:'absolute',top:!phone &&'50%',border:'1px solid black',borderRadius:'50%',width:30,height:30,margin:'0 auto',backgroundColor:'rgb(161,202,241)',borderColor:'transparent'}}>&#8594;</span>
              </div>
              
              
              
              }
              {prev && 
              
              <div style={{backgroundColor:'white',width:'3.5rem',height:'100%',display:'flex', justifyContent:'center',alignItems:'center'}}>
              
              <span style={{color:'white',position:'absolute',top:!phone && '50%',border:'1px solid black',borderRadius:'50%',width:30,height:30,margin:'0 auto',backgroundColor:'rgb(161,202,241)',borderColor:'transparent'}}>&#8592;</span>
              </div>
              }
          </Button>
      )
  }}
    activeIndicatorIconButtonProps={{
      style:{
        color:'rgb(161,202,241)'
      }
    }}
    navButtonsProps={{
      style:{
        transition:'none'
      }
    }}
    >
     <img src={Villa1} alt='villa' />
     <img src={Villa2} alt='villa' />
     <img src={Villa3} alt='villa' />
     <img src={Villa4} alt='villa' />
     <img src={Villa5} alt='villa' />
     <img src={Villa6} alt='villa' />
     <img src={Villa7} alt='villa' />
     <img src={Villa8} alt='villa' />
     <img src={Villa9} alt='villa' />
     <img src={Villa10} alt='villa' />
     <img src={Villa11} alt='villa' />
     <img src={Villa12} alt='villa' />
     <img src={Villa13} alt='villa' />
     <img src={Villa14} alt='villa' />
     <img src={Villa15} alt='villa' />
    </Carousel>

    </div>

    </div>
  )
}

export default SanctuaryImageCarouselTwo


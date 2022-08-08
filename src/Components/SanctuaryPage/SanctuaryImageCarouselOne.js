import React, {useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import Villa1 from './Villa-1-pics/villa1.jpeg'
import Villa2 from './Villa-1-pics/villa2.webp'
import Villa3 from './Villa-1-pics/villa3.webp'
import Villa4 from './Villa-1-pics/villa4.webp'
import Villa5 from './Villa-1-pics/villa5.webp'
import Villa6 from './Villa-1-pics/villa6.webp'
import Villa7 from './Villa-1-pics/villa7.webp'
import Villa8 from './Villa-1-pics/villa8.webp'
import Villa9 from './Villa-1-pics/villa9.webp'
import Villa10 from './Villa-1-pics/villa10.webp'
import Villa11 from './Villa-1-pics/villa11.webp'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
const SanctuaryImageCarouselOne = () => {
    
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
              
              <span style={{color:'white',position:'absolute',top:!phone && '50%',border:'1px solid black',borderRadius:'50%',width:30,height:30,margin:'0 auto',backgroundColor:'rgb(161,202,241)',borderColor:'transparent'}}>&#8594;</span>
              </div>
              
              
              
              }
              {prev && 
              
              <div style={{backgroundColor:'white',width:'3.5rem',height:'100%',display:'flex', justifyContent:'center',alignItems:'center'}}>
              
              <span style={{color:'white',position:'absolute',top:!phone &&'50%',border:'1px solid black',borderRadius:'50%',width:30,height:30,margin:'0 auto',backgroundColor:'rgb(161,202,241)',borderColor:'transparent'}}>&#8592;</span>
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
     <img src={Villa1} />
     <img src={Villa2} />
     <img src={Villa3} />
     <img src={Villa4} />
     <img src={Villa5} />
     <img src={Villa6} />
     <img src={Villa7} />
     <img src={Villa8} />
     <img src={Villa9} />
     <img src={Villa10} />
     <img src={Villa11} />
     
     
    </Carousel>

    </div>

    </div>
  )
}

export default SanctuaryImageCarouselOne


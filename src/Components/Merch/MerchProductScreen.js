
import React, {useState,useEffect,useContext} from 'react'
import {HiMinus,HiPlus} from 'react-icons/hi'
import {AiFillApple, AiOutlineApple} from 'react-icons/ai'
import { Link , useNavigate, Outlet} from "react-router-dom";
import PhoneProductScreen from './PhoneProductScreen';
import WebFont from 'webfontloader';
import MerchPlaceHolder from './merch1.jpeg'
import ModelPlaceHolder from './albert-dera-ILip77SbmOE-unsplash.jpg'
import MerchPlaceHolder2 from './merchplaceholder.jpg'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { HeaderContext } from '../../App';
export const MerchProductScreen = () => {
    const navigation = useNavigate()
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    const [quantity,setQuantity] = useState(1)
    const [sizeSelected, setSizeSelected] = useState(0)
    const [imageSelected, setImageSelected] = useState(0)


    const images = [
        <img src={ModelPlaceHolder}  style={{width:100,height:100,cursor:'pointer', borderWidth:imageSelected === 0 ? 3 : 1, borderColor:imageSelected === 0 ?'yellow' : 'transparent',objectFit:'cover'}}  
        onClick={() =>setImageSelected(0)}
        />,
        <img src={MerchPlaceHolder2}  style={{width:100,height:100,cursor:'pointer', borderWidth:imageSelected === 1 ? 3 : 1, borderColor:imageSelected === 1 ?'yellow' : 'transparent',objectFit:'cover'}} 
        onClick={() => setImageSelected(1)}
        />
]

    let stylee={
        fontWeight:400, fontSize:'1.5rem',fontFamily:'Smooch Sans',textAlign:'center',color:'black',marginTop:15
      }
     
      let subHeaderStyle = {
        fontFamily:'Bree Serif', fontSize:'2.6rem', fontWeight:700, color:'white'
    
    }
      let subHead = {
        fontWeight:600, fontSize:'2.3rem',fontFamily:'Dosis',letterSpacing:'0.45rem'
      }
    
    useEffect(() => {

      WebFont.load({
        google: {
          families: ['Bree Serif', 'Dosis','Smooch Sans']
        }
      });
      window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
    },[])


    const decrement = () => {
        if(quantity <=1) return
        setQuantity(quantity - 1)
    }
   
    const increment = () => {
        setQuantity(quantity + 1)
    }


    return(
        <>

        {phone ? <PhoneProductScreen /> : (
              <div style={{width:'100%',display:'flex', flexDirection:'column',justifyContent:'center'}} >
            <div className='product-1'>
                <div 
                className='product-1-image-wrapper'
                >
                    <div className='product-1-image'>

                   
                <Carousel
    animation='slide'
    duration={120}
    navButtonsAlwaysVisible={true}
    indicators={true}
    stopAutoPlayOnHover={false}
    autoPlay={false}
    IndicatorIcon={images}
   
    >
    
     <img src={ModelPlaceHolder} alt='Merch'   />
     <img src={ModelPlaceHolder} alt='Merch'  />
     
    </Carousel>
    </div>
                </div>
                
            
            <div className='product-1-content'>
                    <h2 style={{...subHead}}>COLLECTION 1</h2>
                    <span style={{...stylee,width:'75%',textAlign:'left',fontSize:'1.35rem' }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.</span>
                    <span style={{...stylee, color:'gray'}}>$ 40</span>
                    <span style={{...stylee,paddingTop:0}}>Size: </span>
                        
                    <div style={{marginTop:15, display:'flex', flexDirection:'row', flexWrap:'wrap', width:'90%', gap:25}}>
                                {sizes.map((i,index) => (
                                    <div  >
                                        <span style={{...stylee,cursor:'pointer',color:sizeSelected === index ? 'black':'gray',borderWidth:1, borderColor:sizeSelected === index ? 'black':'rgba(220,220,220,0.7)', padding:'10px 20px', }} 
                                        onClick={() => setSizeSelected(index)}
                                        >{i.size}</span>
                                    </div>
                                ))}
                    </div>
                    <span style={{...stylee,paddingTop:10,}}>Quantity: </span>
                    <div style={{width:150,height:50,borderWidth:1,borderColor:'rgba(220,220,220,0.7)',display:'flex', alignItems:'center',justifyContent:'center'}}>
                        <button style={{width:45,display:'flex',justifyContent:'center',alignItems: 'center'}} onClick = {decrement}>
                            <HiMinus style={{fontSize:'1.1rem'}} />
                        </button>
                        <span style={{fontFamily:'Dosis', width:60,display:'flex', fontSize:'1.1rem',justifyContent:'center'}}>{quantity}</span>
                        <button style={{width:45,display:'flex',justifyContent:'center',alignItems: 'center'}} onClick = {increment}>
                            <HiPlus style={{fontSize:'1.1rem'}} />
                        </button>
                    </div>

                    <div style={{marginTop:25, width:'80%', height:30, borderWidth:1, borderColor:'rgba(220,220,220,0.7)',display:'flex',justifyContent:'center',alignItems:'center',padding:25,cursor:'pointer'}}>
                        <span style={{fontFamily:'Dosis', fontSize:'1.2rem', color:'gray'}}>
                            ADD TO CART
                        </span>
                    </div>
                    <div style={{marginTop:15,backgroundColor:'black', width:'80%', height:30, borderWidth:1, borderColor:'rgba(220,220,220,0.7)',display:'flex',justifyContent:'center',alignItems:'center',padding:25,cursor:'pointer'}}>
                        <span style={{fontFamily:'Dosis', fontSize:'1.15rem',letterSpacing:'0.08rem', color:'white',display:'flex',alignItems:'center'}}>
                           Buy with <AiFillApple style={{color:'white'}} />Pay
                        </span>
                    </div>    
                </div>
                </div>

                
        </div>
        )}
       
      
         </>
    )
}


const sizes= [
    {
        id:"1",
        size:"Small",
    },
    {
        id:"2",
        size:"Medium",
    },
    {
        id:"3",
        size:"Large",
    },
    {
        id:"4",
        size:"XL",
    },
    {
        id:"5",
        size:"XXL",
    }
]
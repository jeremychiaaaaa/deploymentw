
import React, {useState,useEffect,useContext} from 'react'
import {HiMinus,HiPlus} from 'react-icons/hi'
import {AiFillApple, AiOutlineApple} from 'react-icons/ai'
import { Link , useNavigate, Outlet} from "react-router-dom";
import useLocalStorage from './LocalStorage';
import WebFont from 'webfontloader';
import MerchPlaceHolder from './merch1.jpeg'
import ModelPlaceHolder from './albert-dera-ILip77SbmOE-unsplash.jpg'
import MerchPlaceHolder2 from './merchplaceholder.jpg'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { HeaderContext } from '../../App';
import CartModal from './CartModal';
const PhoneProductScreen = ({cartActive,setCartActive}) => {
const [cart,setCart] = useLocalStorage('cart', [
        {
            id:'0',
            text:'default'
        }
    ])
 const [localStorageCart, setLocalStorageCart] = useState([])
const [quantity,setQuantity] = useState(1)
const [sizeSelected, setSizeSelected] = useState('Small')
const [storageName,setStorageName] = useState('')
const context = useContext(HeaderContext)
    let stylee={
        fontWeight:400, fontSize:'1.5rem',fontFamily:'Smooch Sans',textAlign:'center',color:'black',marginTop:5
      }
     
      let subHeaderStyle = {
        fontFamily:'Bree Serif', fontSize:'2.6rem', fontWeight:700, color:'white'
    
    }
      let subHead = {
        fontWeight:600, fontSize:'2.3rem',fontFamily:'Dosis',letterSpacing:'0.45rem'
      }
    
    useEffect(() => {
      
        let temp = localStorage.getItem('cart')
        let tempArray = JSON.parse(temp)
      setLocalStorageCart(tempArray)
      let name = localStorage.getItem('last-clicked')
      setStorageName(name)
      WebFont.load({
        google: {
          families: ['Bree Serif', 'Dosis','Smooch Sans']
        }
      });
    
    },[context.productName,cartActive])
    const addToCart =  () => {
      
        
        if(localStorageCart!==null&& localStorageCart.map(item => item.size).indexOf(sizeSelected)!== -1 &&  localStorageCart.map(item => item.title).indexOf( storageName.replace(/['"]+/g, '')) !== -1 ){
            localStorageCart.forEach((i,index) => {
                if(i.title === ( storageName.replace(/['"]+/g, '')) && i.size === sizeSelected){
                   
                    let temp = cart.filter(i=>i.title === storageName.replace(/['"]+/g, '') && i.size === sizeSelected)
                    console.log(temp[0])
                    console.log(cart.indexOf(temp[0]))
                    
                    let newObject = temp.map(item => {return {...item,number:item.number + quantity,
                        total:(item.number + quantity)*40}})
                   cart.splice(cart.indexOf(temp[0]),1,newObject[0])
                   setCart(cart)
                }})}
                
                else {

        const nextId = cart.length > 0 ? Math.max(...cart.map((t) => t.id)) + 1 : 0
        let cartItems = {
            'id':nextId,
            'number': quantity,
            'title':storageName.replace(/['"]+/g, ''),
            'size':sizeSelected,
            'image':'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            'delete':false,
            'price':40,
            'total':quantity*40


        }
    
         setCart([...cart,cartItems])
         console.log(cart)
                }
     
  



        setCartActive(true)
        

    }

    const decrement = () => {
        if(quantity <=1) return
        setQuantity(quantity - 1)
    }
   
    const increment = () => {
        setQuantity(quantity + 1)
    }



  return (
    <div style={{overflowY:cartActive && 'hidden',height:cartActive ?'90vh':'100%',overflowX:'hidden',display:context.phoneClicked ? 'none' : 'flex', flexDirection:'column'}}>
            <div style={{width:'100%',height:'40%',}} className={cartActive ? 'phone-active-product-screen' :'phone-product-screen'}> 
            <Carousel
    animation='slide'
    duration={120}
    navButtonsAlwaysVisible={false}
    indicators={true}
    stopAutoPlayOnHover={false}
    autoPlay={false}
    swipe={true}
   
    >
    
     <img src={ModelPlaceHolder} alt='Merch'   />
     <img src={ModelPlaceHolder} alt='Merch'  />
     
    </Carousel>
            </div>
            <div style={{width:'100vw',height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center',marginTop:50}}>
              
               
                    <h2 style={{...subHead,textTransform:'uppercase'}}>{context.productName === '' ? storageName.replace(/['"]+/g, '') : context.productName}</h2>
                    <span style={{...stylee,width:'75%',textAlign:'left',fontSize:'1.35rem' }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero.</span>
                    <span style={{...stylee, color:'gray'}}>$ 40</span>
                    <span style={{...stylee,paddingTop:10,alignSelf:'flex-start',marginLeft:'5%'}}>Size: </span>
                        
                    <div style={{marginTop:15, display:'flex', flexDirection:'row', flexWrap:'wrap', width:'90%', gap:25}}>
                                {sizes.map((i,index) => (
                                    <div  >
                                        <span style={{...stylee,cursor:'pointer',color:sizeSelected === i.size ? 'black':'gray',borderWidth:1, borderColor:sizeSelected === i.size ? 'black':'rgba(220,220,220,0.7)', padding:'10px 20px', }} 
                                        onClick={() => setSizeSelected(i.size)}
                                        >{i.size}</span>
                                    </div>
                                ))}
                    </div>
                    <span style={{...stylee,paddingTop:10,alignSelf:'flex-start', marginLeft:'5%'}}>Quantity: </span>
                    <div style={{width:150,height:50,borderWidth:1,borderColor:'rgba(220,220,220,0.7)',display:'flex', alignItems:'center',justifyContent:'center',alignSelf:'flex-start',marginLeft:'5%'}}>
                        <button style={{width:45,display:'flex',justifyContent:'center',alignItems: 'center'}} onClick = {decrement}>
                            <HiMinus style={{fontSize:'1.1rem'}} />
                        </button>
                        <span style={{fontFamily:'Dosis', width:60,display:'flex', fontSize:'1.1rem',justifyContent:'center'}}>{quantity}</span>
                        <button style={{width:45,display:'flex',justifyContent:'center',alignItems: 'center'}} onClick = {increment}>
                            <HiPlus style={{fontSize:'1.1rem'}} />
                        </button>
                    </div>

                    <div onClick={addToCart} style={{marginTop:25, width:'80%',marginLeft:'5%',alignSelf:'flex-start', height:30, borderWidth:1, borderColor:'rgba(220,220,220,0.7)',display:'flex',justifyContent:'center',alignItems:'center',padding:25,cursor:'pointer'}}>
                        <span 
                        
                        style={{fontFamily:'Dosis', fontSize:'1.2rem', color:'gray'}}>
                            ADD TO CART
                        </span>
                    </div>
                    <div style={{marginTop:15,backgroundColor:'black',marginLeft:'5%',alignSelf:'flex-start', width:'80%', height:30, borderWidth:1, borderColor:'rgba(220,220,220,0.7)',display:'flex',justifyContent:'center',alignItems:'center',padding:25,cursor:'pointer'}}>
                        <span style={{fontFamily:'Dosis', fontSize:'1.15rem',letterSpacing:'0.08rem', color:'white',display:'flex',alignItems:'center'}}>
                           Buy with <AiFillApple style={{color:'white'}} />Pay
                        </span>
                    </div>    
                    </div>
                    {cartActive && <CartModal cartActive={cartActive} setCartActive={setCartActive} cart={cart} />}
    </div>
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
export default PhoneProductScreen
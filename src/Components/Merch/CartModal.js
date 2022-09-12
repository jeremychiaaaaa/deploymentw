import React,{useState,useEffect,useContext} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {HiMinus,HiPlus} from 'react-icons/hi'
import {MdDeleteOutline} from 'react-icons/md'
import useLocalStorage from './LocalStorage';
import WebFont from 'webfontloader';
import { HeaderContext } from '../../App';
import { Link , useNavigate, Outlet} from "react-router-dom";
const CartModal = ({cartActive,setCartActive,cart}) => {
    const navigation = useNavigate()
    const context = useContext(HeaderContext)
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    const [tracker,setTracker] = useState([])
    const [displayCart,setDisplayCart] =  useLocalStorage('cart',cart)
    const [deleteTracker,setDeleteTracker] = useState([])
    
    const [activeIndex,setActiveIndex] = useState(-1)
    let stylee={
        fontWeight:400, fontSize:'1.2rem',fontFamily:'Smooch Sans',textAlign:'center',color:'black'
      }
     
      let subHeaderStyle = {
        fontFamily:'Smooch Sans', fontSize:'2rem', fontWeight:700, color:'black'
    
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

        setTracker(cart.filter((i,index) => index !== 0).map((i,index) => (
        {
            id:index, number:i.number,total:i.total, price:i.price
        }
      )))
        setDeleteTracker(cart.filter((i,index) => index !== 0).map((i,index) => (
            {
                id:index, delete:i.delete
            }
        )))
      
            

    },[cartActive])
  
console.log(cart)
    const increment = (index) => {
        
        let updatedList = tracker.map((i,count) => {
            if(index === i.id) {
                return {...i, number:i.number + 1, total:(i.number+1)*i.price}
            } else {
                return i
            }
        })
        let updatedList2 = cart.map((i,count) => {
            if(index+1 === i.id) {

                return {...i, number:i.number + 1, total:(i.number+1)*i.price}
            } else {
                return i
            }
        })
        console.log(updatedList2)
        setTracker(updatedList)
        setDisplayCart(updatedList2)
    }


    const decrement = (index) => {
        let updatedList = tracker.map((i,count) => {
            if(index === i.id && i.number > 1) {
                return {...i, number:i.number - 1,total:(i.number-1)*i.price }
            } else {
                return i
            }
        })
        let updatedList2 = cart.map((i,count) => {
            if(index+1 === i.id) {

                return {...i, number:i.number - 1, total:(i.number-1)*i.price}
            } else {
                return i
            }
        })
        console.log(updatedList2)
        setTracker(updatedList)
        setDisplayCart(updatedList2)
        setTracker(updatedList)

    }
    
    const remove = (index) => {
    console.log(index)
cart.splice(index,1)
    setDisplayCart(cart)
  
    }
    const checkout = () => {
       
        context.setProductChoose(true)
       
        navigation('/merch/checkout')
    }
  return (
    <div style={{backgroundColor:'rgba(54,54,54,0.3)', width:'100vw',height:'100vh', position:'fixed', top:0, left:0,overflow:'hidden'}}>
            <div
            className='cart-modal'
            style={{width:phone ? '80%' :'30%',height:'100vh',backgroundColor:'white',zIndex:20,right:0,position:'fixed', top:phone ? 0 :70,opacity:1,display:'flex',
                        flexDirection:'column'
        }}>
        

            <div style={{display:'flex', justifyContent:'space-between', width:'100%',alignItems:'center', borderBottomWidth:1, borderBottomColor:'rgba(220,220,220,0.3)',paddingBottom:20,height:'10%' }}>
                <h2 style={{...subHeaderStyle,paddingTop:30,marginLeft:30}}>CART</h2>
                <AiOutlineClose style={{fontSize:'1.5rem',marginTop:30,marginRight:30,cursor:'pointer'}} onClick={() => setCartActive(false)}  />
            </div>
            
          {displayCart.length > 1 && <div style={{width:'100%',overflowX:'hidden',height:'70%', margin:'0 auto', display:'flex', justifyContent:'flex-start',alignItems:'center',gap:50,flexDirection:'column',paddingTop:30}}>
                {displayCart !== null && displayCart.filter((i,index) =>index !== 0 ).map((item,index) => (



                    <div style={{width:'100%',marginLeft:60,  display:'flex', justifyContent:'flex-start',alignItems:'center',gap:25,height:150,position:'relative'}}>
                    <img src={item.image} style={{width:'30%',height:'100%',objectFit:'cover' }} />
                    <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start',gap:5}} >
                            <span style={{...stylee}}>{item.title}</span>
                            <MdDeleteOutline style={{position:'absolute',right:'60px',top:20, fontSize:'2rem',cursor:'pointer'}} onClick = {() => remove(item.id)} />
                            <span style={{...stylee}}>{item.size}</span>
                            <span style={{...stylee}}>${tracker.map(track => track.id === index && <span>{track.total}</span>)}</span>
                            <div style={{width:150,height:50,borderWidth:1,borderColor:'rgba(220,220,220,0.7)',display:'flex', alignItems:'center',justifyContent:'center'}}>
                        <button style={{width:45,display:'flex',justifyContent:'center',alignItems: 'center'}} onClick = {() => {
                           decrement(item.id-1)
                        }}>
                            <HiMinus style={{fontSize:'1.1rem'}} />
                        </button>
                        <span style={{fontFamily:'Dosis', width:60,display:'flex', fontSize:'1.1rem',justifyContent:'center'}}>{tracker.map(track => track.id === index && <span>{track.number}</span>)}</span>
                        <button style={{width:45,display:'flex',justifyContent:'center',alignItems: 'center'}} onClick = {() =>increment(item.id-1)}>
                            <HiPlus style={{fontSize:'1.1rem'}} />
                        </button>
                    </div>
                        </div>
                       </div> 
                ))}
            </div>}  
             
                    
             {displayCart.length > 1 && <div style={{ width:'100%',display:'flex',zIndex:25,justifyContent:'center',alignItems:'center',
               padding:15,cursor:'pointer',
                    
            
            }}
            onClick={checkout}
            >
                        <span style={{...stylee,color:'white',alignSelf:'center',width:'100%',background:'black',padding:10,fontSize:'1.6rem',letterSpacing:'0.2rem'}}>
                            CHECKOUT 
                        </span>
                    </div>} 
            {displayCart.length === 1 && (
                <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'70vh'}}>
                    <span style={{fontFamily:'Smooch Sans', fontSize:'1.8rem',letterSpacing:'0.25rem'}}>YOUR CART IS EMPTY</span>
                    </div>
            )}  
    </div>
                </div>

  )
}

export default CartModal
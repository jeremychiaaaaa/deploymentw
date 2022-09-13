import React, {useState,useEffect,useContext,useMemo} from 'react'
import { Link , useNavigate, Outlet} from "react-router-dom";
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import WebFont from 'webfontloader';
import MerchPlaceHolder from './merch1.jpeg'
import ModelPlaceHolder from './albert-dera-ILip77SbmOE-unsplash.jpg'
import { HeaderContext } from '../../App';
import PhoneMerchLandingPage from './PhoneMerchLandingPage';
import {FaCcPaypal} from 'react-icons/fa'
import PayPal from './paypal.png'
import { AiFillApple } from 'react-icons/ai';
import {IoIosArrowBack} from 'react-icons/io'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { Formik,useFormikContext } from 'formik'
import useLocalStorage from './LocalStorage';
import * as Yup from 'yup';
import { fontFamily } from '@mui/system';
import PhoneCheckOut from './PhoneCheckOut';

const CheckOutOne = () => {

  const context = useContext(HeaderContext)
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const ReviewSchema = Yup.object().shape({
 
    firstName: Yup.string().required('This is a required field'),
    lastName: Yup.string().required('This is a required field'),
    address1: Yup.string().required('Please add your address!'),
  
    postal: Yup.string().required('Please add your postal code'),
    phone:Yup.string().matches(phoneRegExp, 'Please add a valid phone number')
    })
  const navigation = useNavigate()
  const [personalDetails,setPersonalDetails] = useLocalStorage('details',
  [{
      id:'0',
      address1:'',
      destination:'',
      email:'',
      firstName:'',
      lastName:'',
      phone:'',
      postal:'',
  }]
  )
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
  const [cartItems,setCartItems] = useState(null)


  let stylee={
      fontWeight:200, fontSize:'1.2rem',fontFamily:'Smooch Sans',textAlign:'center',color:'black'
    }
   
    let subHeaderStyle = {
      fontFamily:'Smooch Sans', fontSize:'2.6rem', fontWeight:700, color:'black',}
    let subHead = {
      fontWeight:600, fontSize:'1.8rem',fontFamily:'Bree Serif',position:'relative', marginTop:'50px', marginLeft:'10px', 
    }
  
  useEffect(() => {
    context.setProductChoose(false)
    WebFont.load({
      google: {
        families: ['Bree Serif', 'Dosis','Smooch Sans']
      }
    });
    window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
    let temp = localStorage.getItem('cart')
       let tempArray = JSON.parse(temp)
   setCartItems(tempArray)
let totalTemp = []
    
  

     
  },[context.productChoose])

 
   const lineItems = cartItems!==null && cartItems.filter((i,index) => index !==0).map((item) =>   {
   return {
     price_data: {
        currency: 'usd',
        product_data: {
          name:item.title,
          images:[item.image],
          
        },
        unit_amount: 4000,
      },
      quantity:item.number
    }
   }
     
  )

  const CheckOutOptions = {
    lineItems,
    mode:'payment',
    successUrl:`${window.location.origin}/success`,
    cancelUrl:`${window.location.origin}/cancel`
  }
  const url = "https://kyn-merch.herokuapp.com/api";

  const redirectToCheckOut =  () => {
   axios.post(`${url}/stripe/create-checkout-session`,{
      cartItems,
      email: personalDetails[personalDetails.length-1].email
   }).then((res) => {
    if(res.data.url){
      //take to the checkout page
      window.location.href = res.data.url
    }
   }).catch((err) => console.log(err.message))

  }

  

  return (
<>
    {phone ? <PhoneCheckOut /> : 
    
    <div style={{width:'100vw',height:'fit-content', display:'flex', flexDirection:'row',}}>
      <div style={{width:'60%',height:'fit-content',display:'flex', borderLeftWidth:1, 
    flexDirection:'column',justifyContent:'flex-start', alignItems:'center',paddingTop:40,gap:40,
    }}>
        <span style={{...subHeaderStyle}}>KYN MERCH</span>
        <div style={{width:'60%',margin:'0 auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',
                       borderLeftWidth:1,borderTopLeftRadius:8,borderLeftColor:'rgba(220,220,220,1)',
                       borderRightWidth:1,borderTopRightRadius:8,borderRightColor:'rgba(220,220,220,1)',
                       borderBottomWidth:1,borderBottomColor:'rgba(220,220,220,1)',paddingBottom:20,
                       borderBottomLeftRadius:8,borderBottomRightRadius:8,
      }}>
           <h2 style={{width:'99%',textAlign:'center',lineHeight:'0.1em',margin:'10px 0 20px',borderBottomWidth:1,transform:'translate(0px,-12px)',
        borderBottomColor:'rgba(220,220,220,1)'
        }}>
             <span style={{...subHeaderStyle,fontSize:'1.4rem' ,padding:'0px 20px',background:'#fff' }}>Express Checkout</span>
       </h2>
     
        <div style={{display:'flex', flexDirection:'row', gap:15, alignItems:'center', justifyContent:'center',width:'100%',
     
      
      }}>
        <div style={{width:'45%',height:50,backgroundColor:'rgba(255,186,0,0.7)',display:'flex',justifyContent:'center',alignItems:'center',
      borderWidth:1,borderRadius:5,borderColor:'transparent'
      }}>
          <img src={PayPal} style={{width:100,height:100,objectFit:'contain',marginTop:5 }} />
          
       
          </div>
          <div style={{width:'45%',height:50,backgroundColor:'black',display:'flex',justifyContent:'center',alignItems:'center',
      borderWidth:1,borderRadius:5,borderColor:'transparent'}}>
                        <span style={{fontFamily:'Dosis', fontSize:'1.15rem',letterSpacing:'0.08rem', color:'white',display:'flex',alignItems:'center'}}>
                           Buy with <AiFillApple style={{color:'white'}} />Pay
                        </span>
                    </div>    
        </div>
        </div>
        <h2 style={{width:'60%',textAlign:'center',lineHeight:'0.1em',margin:'10px 0 20px',borderBottomWidth:1,transform:'translate(0px,-12px)',
        borderBottomColor:'rgba(220,220,220,1)',paddingTop:20,
        }}>
             <span style={{...subHeaderStyle,fontSize:'1.4rem' ,padding:'0px 20px',background:'#fff' }}>OR</span>
       </h2>

        <div style={{display:'flex', justifyContent:'flex-start',width:'60%',flexDirection:'column',transform:'translateY(-20px)',overflow:'hidden',height:'100vh'}}>
          <span style={{...subHeaderStyle,textAlign:'left',fontSize:'1.5rem'}}>Contact Information</span>
          <Formik
 initialValues={{email:'',firstName: '', lastName:'', destination:value, address1:'',  postal:'',phone:''}}
       validationSchema={ReviewSchema}
       onSubmit={ (values) => {
        setPersonalDetails([...personalDetails,values])
        redirectToCheckOut()
      }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         setFieldValue
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}
         style={{display:'flex',flexDirection:'column',width:'100%', justifyContent:'flex-start',marginTop:30,gap:20,overflow:'hidden',height:'fit-content'}}
         
         
         >
               
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder='Email'
             
             style={{width:'100%',borderWidth:1, padding:10,borderRadius:5, }}
           />
           
         
            <span style={{...subHeaderStyle,textAlign:'left',fontSize:'1.5rem'}}>Shipping Information</span>
            <Select 
           

            options={options} value={values.destination} onChange={(val)=> setFieldValue("destination",val)} placeholder={<div style={{fontFamily:'Smooch Sans',fontWeight:400,}}>Select Country</div>}/>
            <div style={{display:'flex',alignItems:'center',gap:20}}>
            <div style={{display:'flex', flexDirection:'column', width:'60%',gap:5,justifyContent:'center'}}>
            <input
             type="text"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
             placeholder='First Name'
             style={{width:'100%',borderWidth:1, padding:10,borderRadius:5,borderColor: errors.firstName ? 'red' : 'rgba(220,220,220,0.8)' }}
           />
           <span style={{fontFamily:'Smooch Sans', fontWeight:800, fontSize:'1rem',color:'red'}} >{errors.firstName}</span>
           </div>
           <div style={{display:'flex', flexDirection:'column', width:'40%',gap:5,justifyContent:'center'}}>
             <input
             type="text"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
             placeholder='Last Name'
             style={{width:'100%',borderWidth:1, padding:10,borderRadius:5,borderColor: errors.lastName ? 'red' : 'rgba(220,220,220,0.8)' }}
           />
            <span style={{fontFamily:'Smooch Sans', fontWeight:800, fontSize:'1rem',color:'red'}}>{errors.lastName}</span>
           </div>
                     
           </div>
           <div style={{display:'flex', flexDirection:'column', width:'100%',gap:5,justifyContent:'center'}}>
             <input
             type="text"
             name="address1"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.address1}
             placeholder='Address 1'
             style={{width:'100%',borderWidth:1, padding:10,borderRadius:5,borderColor: errors.address1 ? 'red' : 'rgba(220,220,220,0.8)' }}
           />
            <span style={{fontFamily:'Smooch Sans', fontWeight:800, fontSize:'1rem',color:'red'}}>{errors.address1}</span>
           </div>
           <div style={{display:'flex', flexDirection:'column', width:'100%',gap:5,justifyContent:'center'}}>
             <input
             type="text"
             name="postal"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.postal}
             placeholder='Postal'
             style={{width:'100%',borderWidth:1, padding:10,borderRadius:5,borderColor: errors.postal ? 'red' : 'rgba(220,220,220,0.8)' }}
           />
            <span style={{fontFamily:'Smooch Sans', fontWeight:800, fontSize:'1rem',color:'red'}}>{errors.postal}</span>
           </div>
           <div style={{display:'flex', flexDirection:'column', width:'100%',gap:5,justifyContent:'center'}}>
             <input
             type="text"
             name="phone"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.phone}
             placeholder='Phone'
             style={{width:'100%',borderWidth:1, padding:10,borderRadius:5,borderColor: errors.phone ? 'red' : 'rgba(220,220,220,0.8)' }}
           />
            <span style={{fontFamily:'Smooch Sans', fontWeight:800, fontSize:'1rem',color:'red'}}>{errors.phone}</span>
           </div>
            <div style={{display:'flex', width:'100%', justifyContent:'space-between',alignItems:'center'}}>
              <span style={{display:'flex',alignItems:'center',fontFamily:'Smooch Sans',fontWeight:500,fontSize:'1.15rem',cursor:'pointer'}}
              onClick = {() => navigation(-1)}
              ><IoIosArrowBack />Return To Cart</span>
            <button type="submit" 
            style={{borderWidth:1,borderColor:'transparent', backgroundColor:'gray', borderRadius:5,padding:'10px 30px',
          }}
      >
              <span style={{fontFamily:'Smooch Sans', fontWeight:700, color:'white',fontSize:'1.2rem',}}>
                Continue to payment
              </span>
             
           </button>
            </div>
           
         </form>
       )}
     </Formik>
        </div>



      </div>
      <div style={{width:1,height:'150vh',position:'absolute',left:'55%',backgroundColor:'rgba(220,220,220,0.8)',top:0}}>

      </div>
      <div style={{backgroundColor:'rgb(249,249,249)',width:'45%',height:'150vh',position:'absolute',right:'0',
      display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',gap:0,
   
    
    }}>
        {cartItems !== null && cartItems.filter((i,index) => index !==0).map((item,index) => (
          <div style={{display:'flex', width:'90%', margin:'0 auto', height:120,
          alignItems:'center',
          gap:20
          
          }}>
            <div style={{position:'relative'}}>
              <span style={{position:'absolute',top:-20,right:-10,width:30,height:30,borderRadius:15,borderColor:'transparent',
              borderWidth:1,background:'lightgray',margin:'0 auto',display:'flex',justifyContent:'center',alignItems:'center'
            }}>{item.number}</span>
              <img src={item.image} style={{width:70,objectFit:'cover',height:70,objectPosition:'80% 50%',
              borderWidth:1, borderColor:'transparent',borderRadius:10
            }} />
            </div>
              <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
                <span style={{...stylee,fontWeight:600,fontSize:'1.4rem'}}>T-shirt: {item.title}</span>
                <span style={{fontFamily:'Smooch Sans',fontWeight:300,fontSize:'1.3rem'}}>{item.size}</span>
              </div>
              <span style={{position:'absolute',right:'20%',fontFamily:'Smooch Sans',fontWeight:400,fontSize:'1.4rem'}}>
               ${item.number * 40}
              </span>
            </div>
        ))}
        <div style={{width:'75%',height:1, backgroundColor:'lightgray',marginTop:20,alignSelf:'flex-start',transform:'translateX(7%)'}}>

        </div>
        <div style={{width:'90%', display:'flex', alignItems:'center',marginTop:20,}}>
              <span style={{fontFamily:'Smooch Sans',fontWeight:600,fontSize:'1.3rem',color:'gray'}}>Subtotal</span>
              <span style={{position:'absolute',right:'20%',fontFamily:'Smooch Sans',fontWeight:400,fontSize:'1.4rem'}}>${cartItems !== null && cartItems.filter((i,index) => index!==0).map((item) => item.total).reduce((a,b)=>a+b,0)}</span>
        </div>
        <div style={{width:'90%', display:'flex', alignItems:'center'}}>
              <span style={{fontFamily:'Smooch Sans',fontWeight:600,fontSize:'1.3rem',color:'gray'}}>Shipping</span>
              <span style={{position:'absolute',right:'20%',fontFamily:'Smooch Sans',fontWeight:400,fontSize:'1.4rem'}}>$10</span>
        </div>
        <div style={{width:'75%',height:1, backgroundColor:'lightgray',marginTop:20,alignSelf:'flex-start',transform:'translateX(7%)'}}>

</div>
        <div style={{width:'90%', display:'flex', alignItems:'center',marginTop:20}}>
              <span style={{fontFamily:'Smooch Sans',fontWeight:600,fontSize:'1.8rem',color:'gray'}}>Total</span>
              <span style={{position:'absolute',right:'20%',fontFamily:'Smooch Sans',fontWeight:400,fontSize:'1.6rem'}}>${cartItems !== null && cartItems.filter((i,index) => index!==0).map((item) => item.total).reduce((a,b)=>a+b,10)}</span>
        </div>
      </div>
    </div>
  }
</>
  )
}

export default CheckOutOne

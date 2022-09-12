import React, {useState,useEffect,useContext} from 'react'
import WebFont from 'webfontloader';
import {BsCheckCircleFill} from 'react-icons/bs'
import { createOrder } from '../../Firebase/Config';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
export const CheckOutSuccess = () => {
    const { width, height } = useWindowSize()
    const [stopConfetti,setStopConfetti] = useState(false)
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    let stylee={
        fontWeight:400, fontSize:'1.2rem',fontFamily:'Smooch Sans',textAlign:'center',color:'black'
      }
     
      let subHeaderStyle = {
        fontFamily:'Smooch Sans', fontSize:'2rem', fontWeight:700, color:'black'
    
    }
      let subHead = {
        fontWeight:600, fontSize:'2.3rem',fontFamily:'Bree Serif',}
    
    useEffect(() => {

      WebFont.load({
        google: {
          families: ['Bree Serif', 'Dosis','Smooch Sans']
        }
      });
      window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))


      let temp = localStorage.getItem('cart')
      let tempArray = JSON.parse(temp)
      console.log(tempArray)
      createOrder(JSON.parse(localStorage.getItem('cart')))
    
      setTimeout(() => {
        setStopConfetti(true)
      },5000)

    },[])

  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center',
    width:'100vh', width:'100vw', overflow:'hidden', backgroundColor:'white',gap:15,}}>
        <Confetti width={width} height={height} />
        <BsCheckCircleFill style={{fontSize:'2.5rem',marginTop:55,}} />
        <span style={{...subHead,}}>Thank you for your order!</span>
        <span style={{fontFamily:'Smooch Sans', fontSize:'1.6rem', letterSpacing:'0.05rem', fontWeight:500}}>Woohoo! Your payment was successful and your order is complete.</span>
        <span style={{fontFamily:'Smooch Sans', fontSize:'1.6rem', letterSpacing:'0.05rem', fontWeight:500}}>A receipt of your order is on your way to your inbox.</span>
    </div>
  )
}


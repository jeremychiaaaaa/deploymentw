import React, {useState,useEffect,useContext} from 'react'
import { Link , useNavigate, Outlet} from "react-router-dom";
import WebFont from 'webfontloader';
import MerchPlaceHolder from './merch1.jpeg'
import ModelPlaceHolder from './albert-dera-ILip77SbmOE-unsplash.jpg'

import { HeaderContext } from '../../App';
const PhoneMerchLandingPage = () => {
    const context = useContext(HeaderContext)
    const navigation = useNavigate()
    let stylee={
        fontWeight:200, fontSize:'1.2rem',fontFamily:'Smooch Sans',textAlign:'center',color:'white'
      }
     
      let subHeaderStyle = {
        fontFamily:'Bree Serif', fontSize:'2.6rem', fontWeight:700, color:'white',}
      let subHead = {
        fontWeight:600, fontSize:'1.8rem',fontFamily:'Bree Serif',position:'relative', marginTop:'50px', marginLeft:'10px', 
      }
    
    useEffect(() => {

      WebFont.load({
        google: {
          families: ['Bree Serif', 'Dosis','Smooch Sans']
        }
      });
    
    },[])
  return (
    <div style={{display:context.phoneClicked ? 'none' : 'flex', flexDirection:'column', width:'100vw', height:'100vh'}}>
        
        <div style={{height:'75vh', width:'100vw', backgroundColor:'black', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div style={{height:'65%', width:'100%',}}>
                <img src={MerchPlaceHolder} style={{height:'100%',width:'100%', objectFit:'contain'}} />
            </div>
            <span style={{backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center', borderWidth:1,
             borderColor:'transparent', color:'black', padding:'10px 25px',fontFamily:'Smooch Sans',
             fontSize:'1.5rem',
             marginTop:50
        
        }}>KYN COLLECTION</span>
        </div>
        <div style={{width:'100vw', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center'}}>
            <span style={{...subHead}}>ALL PRODUCTS</span>
            
            <div style={{width:'95%', display:'flex',gap:20, flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
            {tShirts.map((i,index) => (
                    <div key={i.id} 
                    style={{display:'flex', flexDirection:'column', cursor:'pointer', justifyContent:'center', alignItems:'center', width:'45%', height:'40%',}}
                  
                    onClick={() => navigation(`/merch/${i.name}`)}
                    >
                        <img src={i.image} style={{height:'75%',width:'100%',objectFit:'cover' }} />
                        <span style={{...stylee, textAlign:'center', marginTop:'20px',color:'black',fontSize:'1.8rem',fontWeight:300}} >{i.name}</span>
                        <span style={{...stylee, textAlign:'center', marginTop:'0px',color:'black'}} >{i.price}</span>
                    </div>
                ))}
            </div>
        
        
        </div>


    </div>
  )
}

const tShirts = [
    {
        id:"1",
        name:"Collection-1",
        price:"$40",
        image:ModelPlaceHolder
    },
    {
        id:"2",
        name:"Collection-2",
        price:"$40",
        image:ModelPlaceHolder
    },
    {
        id:"3",
        name:"Collection-3",
        price:"$40",
        image:ModelPlaceHolder
    },
    {
        id:"4",
        name:"Collection-4",
        price:"$40",
        image:ModelPlaceHolder
    },



]


export default PhoneMerchLandingPage
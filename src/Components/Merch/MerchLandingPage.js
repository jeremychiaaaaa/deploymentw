import React, {useState,useEffect,useContext} from 'react'
import { Link , useNavigate, Outlet} from "react-router-dom";
import WebFont from 'webfontloader';
import useLocalStorage from './LocalStorage';
import MerchPlaceHolder from './merch1.jpeg'
import ModelPlaceHolder from './albert-dera-ILip77SbmOE-unsplash.jpg'
import { HeaderContext } from '../../App';
import PhoneMerchLandingPage from './PhoneMerchLandingPage';
function MerchLandingPage() {
    
    const navigation = useNavigate()
    const [lastClickedProduct,setLastClickedProduct] = useLocalStorage('last-clicked',
    [{
      id:'1',
      title:'default'
    }]
    
    )
    const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
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
      window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
    },[])
    const context = useContext(HeaderContext)
  return (
    <>
    {phone ? <PhoneMerchLandingPage /> : 
    
    (
       <div style={{display:'flex', flexDirection:'column', width:'100vw', height:'100vh', }}>
        <div style={{backgroundColor:'black', display:'flex', width:'100%', height:'60vh' }}>
            <div style={{width:'60%',display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <h2 style={{...subHeaderStyle}}>KYN COLLECTION</h2>
                <span style={{...stylee,width:'50%', }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</span>
            </div>
            <div style={{width:'40%', height:'100%',display:'flex', justifyContent:'flex-start',alignItems:'center'}}>
                <img src={MerchPlaceHolder} style={{width:'70%',}}/>
            </div>
        </div>
            
        <div style={{display:'flex', flexDirection:'column',width:'100vw', }}>
            <span style={{...subHead, textAlign:'center',letterSpacing:'0.8rem'}}>ALL PRODUCTS</span>
            <div style={{display:'flex', width:'100vw',  alignItems:'center',justifyContent:'space-around',marginTop:60 }}>  
                {tShirts.map((i,index) => (
                    <div key={i.id} 
                    style={{display:'flex', flexDirection:'column', cursor:'pointer', justifyContent:'center', alignItems:'center', width:'20%', height:'400px',}}
                  
                    onClick={() => {
                      setLastClickedProduct(i.name)
                      context.setProductName(i.name)
                      navigation(`/merch/${i.name}`)
                    
                    }}
                    >
                        <img src={i.image} style={{height:'75%',width:'100%',objectFit:'cover' }} />
                        <span style={{...stylee, textAlign:'center', marginTop:'20px',color:'black',fontSize:'1.8rem',fontWeight:300}} >{i.name}</span>
                        <span style={{...stylee, textAlign:'center', marginTop:'0px',color:'black'}} >{i.price}</span>
                    </div>
                ))}
                
            </div>
           

        </div>
      
    </div>
    )}
   
</>
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

export default MerchLandingPage
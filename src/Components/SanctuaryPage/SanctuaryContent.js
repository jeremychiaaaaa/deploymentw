import React,{useEffect,useState} from 'react'
import WebFont from 'webfontloader';
import SanctuaryImageCarouselOne from './SanctuaryImageCarouselOne';
import SanctuaryImageCarouselTwo from './SanctuaryImageCarouselTwo';
import SanctuaryImageCarouselThree from './SanctuaryImageCarouselThree';
import ConceptImage from './metaverse-image.png'
import fs from './f&s.jpeg'
export const SanctuaryContent = () => {
  const[phone,setPhone] = useState(window.matchMedia("(max-width: 1060px)").matches)
    let stylee={
        fontWeight:200, fontSize:'1.3rem',fontFamily:'Dosis',marginBottom:'15px'
      }
     
      let subHeaderStyle = {
        fontFamily:'Bree Serif', fontSize:'4.6rem', fontWeight:700, color:'white',}
      let subHead = {
        fontWeight:900, fontSize:'1.9rem',fontFamily:'Bree Serif',position:'relative', marginTop:'10px', marginLeft:'10px', 
      }
    
    useEffect(() => {

      WebFont.load({
        google: {
          families: ['Bree Serif', 'Dosis']
        }
      });
      window.matchMedia("(max-width: 1060px)").addEventListener('change', e => setPhone(e.matches))
    },[])
    return(
        <div style={{width:'100%', maxWidth:'90rem', height:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <div className='sanctuary-content-grid'>
       

        <div className='sanctuary-content-2'>
        <div className='sanctuary-content-2-image' style={{}}>
           <img src={ConceptImage} style={{height:'100%', objectFit:'cover', objectPosition:'50% 50%' }} />
        </div>
        <div className='sanctuary-content-2-text' style={{backgroundColor:'white',padding:10}}>
        <h2 style={{...subHead,textAlign:'center',marginTop:40}}>THE CONCEPT</h2>
      <p style={{...stylee, marginTop:'10px',marginLeft:60,width:'80%',textAlign:'center'}}>"As terrifying and painful as reality can be, it's also... the only place that... you can get a decent
meal. Because, reality... is real."<br/> <span style={{fontStyle:'italic'}}>(James Halliday, Ready Player One, 2018)</span> <br/><br/></p>
<span style={{...stylee, marginTop:'10px', marginLeft:60, width:'80%',display:'flex', flexDirection:'column',justifyContent:'center',}}>While the "Metaverse" is an exciting concept, the technology for a fully-immersive metaverse like Ready Player One's will not arrive for many years to come.<br/><br/>
Meanwhile, we choose to focus on reality, because reality is still where we are going to be
spending most of our time.</span>
        </div>
        </div>
        <div className='sanctuary-content-3'>
        
        <div className='sanctuary-content-3-text' style={{backgroundColor:'white',padding:1}}>
        <h2 style={{...subHead,textAlign:'center',marginTop:40}}>FEASIBILITY AND SUSTAINABILITY</h2>
      <p style={{...stylee, marginTop:'10px',marginLeft:'60px',display:'flex',justifyContent: 'center',width:'85%',}}>Our real-life Sanctuaries have to be self-sustainable. So we will buy over existing Airbnb villas that already have a profitable track record and convert them into our Sanctuaries. <br/><br/>
      Lots of admin, legal and regulatory frameworks  still need to be tested. We will start off with just one villa, and perfect the system before expanding.

<br /> <br/>
</p>  
<span style={{...subHead, fontSize:'1.3rem',marginLeft:60,display:'flex',justifyContent: 'center',width:'85%',}}>Sounds like a feat, but normalcy was never meant for us. We are here to redefine norms. #LFG</span>
        </div>
        <div className='sanctuary-content-3-image' style={{}}>
           <img src={fs} style={{objectFit:'cover',width:'100%',height:'100%', }} />
        </div>
        </div>
        </div>


        {/*Villa Portions*/}
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start',width:'110%',marginTop:200 }}>
              {/*Villa 1 */}
              <h2 style={{padding:'0 100px', fontSize:'2.8rem', fontFamily:'Bree Serif',fontWeight:700,}}>Our Potential Villas</h2>
                {/*Upperborder*/}
                <div className='seperator'></div>
                <div className='villa-1'>
               
                 
                 <SanctuaryImageCarouselOne/>
           
                 

                  <div className='villa-1-content' >
                    <h2 style={{fontSize:'2.4rem', fontWeight:700, fontFamily:'Bree Serif',marginBottom:15,}}>Villa 1</h2>
                    
                    <span style={stylee}>Sale Price : 1,500,000 USD</span>
                   
                    <span style={stylee}>No. of Bedrooms: 12</span>
           
                    <span style={{...stylee,width:'90%',}}>Location: <br/><br/>
           
                      <span style={{...stylee,marginLeft:30,width:'90%',display:"flex", flexDirection:'column',textAlign:'left'}}>
                      ● Seminyak, Bali, Indonesia<br/><br/>
<span style={{display:'flex', flexDirection:'row'}}>● <span style={{marginLeft:5}} >2 minutes drive to Double Six beach with its many beach bars</span></span> <br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>5 minutes drive to Oberoi Beach</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>10 minutes walking distance from shops, restaurants, and nightlife clubs</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>15 minutes walk to Eat Street - crammed with restaurants, bars and shops</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>25 minutes drive from Ngurah Rai Airport</span></span>

                      </span>
                    </span>
                  </div>
                </div>
  <div className='seperator'></div>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start',width:'110%',marginTop:0 }}>
              {/*Villa 2 */}
              
                {/*Upperborder*/}
               
                <div className='villa-1'>
               
                 
                 <SanctuaryImageCarouselThree/>
           
                 

                  <div className='villa-1-content' >
                    <h2 style={{fontSize:'2.4rem', fontWeight:700, fontFamily:'Bree Serif',marginBottom:15}}>Villa 2</h2>
                    
                    <span style={stylee}>Sale Price : 2,700,000 USD</span>
                    <br/>
                    <span style={stylee}>No. of Bedrooms: 15</span>
                    <br/>
               

                    <span style={{...stylee,width:'90%',}}>Location: <br/><br/>
           
                      <span style={{...stylee,marginLeft:30,width:'90%',display:"flex", flexDirection:'column'}}>  
                      ● Bang Po, Koh Samui, Thailand<br/><br/>
                         <span style={{...stylee,display:'flex', flexDirection:'row',gap:5 }}>●<span>2min drive to Bang Po Beach, famous for cheap and tasty seafood restaurants.</span></span>
                      <span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>3 minutes drive to Ban Tai beach (shallow water and soft sand).</span></span><br/>
                  
                      <span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>7 minutes drive to the famous Fisherman’s Village and The Wharf.</span></span><br/>
                  
                      <span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>12 minutes drive to the famous Chaweng Beach, and Central Festival shopping mall.</span>

                      </span>
                   <br/><br/>



                      </span>
                    </span>
                  </div>
                </div>
  <div className='seperator'></div>
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start',width:'110%',marginTop:0 }}>
              {/*Villa 2 */}
           
                {/*Upperborder*/}
          
                <div className='villa-1'>
               
                 
                 <SanctuaryImageCarouselTwo/>
           
                 

                  <div className='villa-1-content' >
                    <h2 style={{fontSize:'2.4rem', fontWeight:700, fontFamily:'Bree Serif',marginBottom:15}}>Villa 3</h2>
                    <br/>
                    <span style={stylee}>Sale Price : 1,200,000 USD</span>
                   
                    <span style={stylee}>No. of Bedrooms: 10</span>
           
                    <span style={{...stylee,width:'90%',}}>Location: <br/><br/>
           
                    <span style={{...stylee,marginLeft:30,width:'90%',display:"flex", flexDirection:'column',textAlign:'left'}}>
                      ● Seminyak, Bali, Indonesia<br/><br/>
<span style={{display:'flex', flexDirection:'row'}}>● <span style={{marginLeft:5}} >3 minutes drive to Double Six beach with its many beach bars</span></span> <br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>5 minutes drive to Oberoi Beach</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>10 minutes walking distance from shops, restaurants, and nightlife clubs</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>15 minutes walk to Eat Street - crammed with restaurants, bars and shops</span></span><br/>
<span style={{display:'flex', flexDirection:'row',gap:5 }}>●<span>25 minutes drive from Ngurah Rai Airport</span></span>

                      </span>
                    </span>
                  </div>
                </div>
  <div className='seperator'></div>
          </div>
        </div>
    )
}
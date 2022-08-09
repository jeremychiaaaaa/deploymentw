import React from 'react'
import {motion} from 'framer-motion'
import Backdrop from './Backdrop'
import ReactCompareImage from 'react-compare-image';
const newArt1 = require('./KYN Designed Avatar Collection D werewolf form (2).jpg')
const newArt2 = require('./KYN Designed Avatar Collection D werewolf no hand (1).jpg')
const dropIn = {
    hidden:{
        y:'-20vh',
        opacity:0,
    },
    visible:{
        y:'0',
        opacity:1,
        transition:{
            duration:'100ms',
            type:'spring',
            damping:25, 
            stiffness:500,
        },
    },
    exit:{
        y:'100vh',
        opacity:0,
    }
}

export default function ArtModal({handleClose}){
    return(
        <Backdrop onClick={handleClose}>
            <motion.div onClick={(e)=>e.stopPropagation()}
            className='art-modal'
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
           
        
           <ReactCompareImage leftImage={newArt1} rightImage={newArt2}/>
            
            </motion.div>
        </Backdrop>
    )
}
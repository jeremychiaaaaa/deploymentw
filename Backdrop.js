import React from 'react'
import { motion } from 'framer-motion'
function Backdrop({children, onClick}) {
  return (
   <motion.div
   className="backdrop"
   onClick={onClick}>
       {children}
   </motion.div>
  )
}

export default Backdrop
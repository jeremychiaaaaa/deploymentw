import React, {useState, useEffect} from 'react'
const image1 = require('../backgroundimage.jpg')
function HomePage() {
  const[loading,setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  },[])

  return (
   <div className="homePage-background">
      <div  className='homepage-image'>

      </div>
    
    </div>
    )

}



const LoadingPage = () => {
  return(
    <div className='loadingPage'>
      <span>Hello World</span>
    </div>
  )
}

export default HomePage
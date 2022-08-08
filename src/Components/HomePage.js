import React, {useState, useEffect} from 'react'

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





export default HomePage
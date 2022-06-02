import React, {useState, useEffect,useContext} from 'react'
import { faceOff } from './Header'

import styled, {keyframes} from 'styled-components'
import WebFont from 'webfontloader';
function Manifesto() {
  const[phone,setPhone] = useState(window.matchMedia("(max-width: 900px)").matches)
  useEffect(() => {
  window.matchMedia("(max-width: 900px)").addEventListener('change', e => setPhone(e.matches))
  WebFont.load({
    google: {
      families: ['Droid Sans', 'Chilanka','Roboto Condensed']
    }
  });
 
 }, [])
  return (
    
    <div className="manifesto">

    <div className={phone ? 'manifesto-card-phone':'manifesto-card'}>
     
  
      <h2 className="manifesto-title">MANIFESTO</h2>
      <hr />
      <p style={{fontFamily:'Roboto Condensed'}}>
    
We are the Kydz of Anarchy.
<br />
The <span>rebels</span>, the misfits, the deviants;
<br/>
The <span>action-takers</span>, the wide-eyed dreamers, the freedom fighters. 
<br/>
Normalcy was never meant for us.
<br/>
<br/>


In this broken system, there's more to life than a 9-to-5.
<br/>
Deep down, we all crave for something more.
<br/>
Its not about the money, it never was.
<br/>
It's about the freedom, the growth and the fulfillment.
<br/>
Its about being the best versions of ourselves.
<br/>
<br/>


Bc we dare to dream, we have a shot.
<br/>
Our dreams wake us up before the sun does.
<br/>
They may tell us that we are crazy, but that's okay.
<br/>
They never really understood us anyway.
<br/>
<br/>


Rise above the herd, we will.
<br/>
Crush self-doubt, we will.
<br/>
We don't surrender to our struggles, we make our struggles surrender to us.
<br/>
<br/>


Kyn is an attitude that we choose to step into.
<br/>
It's a mentality.
<br/>
It's our powerful alter egos.
<br/>
It means putting aside all our fears, all our uncertainties, all our doubts, and every reason we think
we can't do it.

</p>
<p>
Whatever our past is, it doesn't matter here.
<br/>
Here, it's a new beginning.
<br/>
Here, it's a fresh start.
<br/>
Here, we are your Kyn.
<br/>
Here, we are family.
<br/>
Welcome to the Sanctuary.

      </p>
    </div> 
    
    </div>
  )
}
const equalize = keyframes`
0% {
  height: 60px;
}
4% {
  height: 50px;
}
8% {
  height: 40px;
}
12% {
  height: 30px;
}
16% {
  height: 20px;
}
20% {
  height: 30px;
}
24% {
  height: 40px;
}
28% {
  height: 10px;
}
32% {
  height: 40px;
}
36% {
  height: 60px;
}
40% {
  height: 20px;
}
44% {
  height: 40px;
}
48% {
  height: 70px;
}
52% {
  height: 30px;
}
56% {
  height: 10px;
}
60% {
  height: 30px;
}
64% {
  height: 50px;
}
68% {
  height: 60px;
}
72% {
  height: 70px;
}
76% {
  height: 80px;
}
80% {
  height: 70px;
}
84% {
  height: 60px;
}
88% {
  height: 50px;
}
92% {
  height: 60px;
}
96% {
  height: 70px;
}
100% {
  height: 80px;
}

`
const Bars = styled.span`
 
  animation: ${equalize} 1.25s steps(25,end) 0s infinite;
`
export default Manifesto
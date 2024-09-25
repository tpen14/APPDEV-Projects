import { useState } from 'react'
import Body from './Body'
import Instructions from './Instructions'
import Usage from './Usage'

import './App.css'

function App() {
  return (
    <>
    <Body model = "KB-X1000" switch = "Cherry MX Red (Mechanical)"
    layout="Full Size (104 keys)" light = "RGB with customizable Colors" weight = "1.2" length ="1.8" 
    feat = "Anti-ghosting, N-key rollover, dedicated media controls"/>
    <Instructions/>
    <Usage/>

    </>
  )
}

export default App

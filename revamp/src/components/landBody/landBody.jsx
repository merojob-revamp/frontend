import React from 'react'
import MidBar from './elements/midbar.jsx'
const landBody = () => {
  return (
    <div style={landB.frame}>
      <MidBar/>
    </div>
  )
}

export default landBody;
const landB = {
    frame:{
        width: '100%',
        height: '100vh',
        backgroundColor: '#FAFAFA',
        padding: '64px 48px',
    }
}

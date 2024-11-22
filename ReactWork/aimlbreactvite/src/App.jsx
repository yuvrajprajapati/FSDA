import React from 'react'
import Student from './Student';


function App() {
  let a=20;
  // let mystyle={
  //   backgroundColor:'cyan',
  //   color:'red',
  //   border:'10px solid black',
  //   height:'100px',
  // }
  return (
    // <div style={{color:'Red'}}><h2>ABES Engineering College</h2>
    // <div style={mystyle}>{a}</div>
    <div>
      <div>
          <Student name="Rahul Kumar" roll='2200321530' branch="CSE AIML" />
      </div>
    </div>
  
  )
}

export default App
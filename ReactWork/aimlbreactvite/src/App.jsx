import React from 'react'
import Student from './Student';
import logo from './logo.png'
import StudentState from './StudentState';
import Image from "./image"

function App() {
    const studentdata={}
  return (
    // <div style={{color:'Red'}}><h2>ABES Engineering College</h2>
    // <div style={mystyle}>{a}</div>
    <div style={{marginLeft:"300px"}}>
      <Image/>
      {/* <Student data={studentdata} /> */}
      {/* <StudentState /> */}
      {/* <div>
          <Student name="Sahil Jaiswal" roll='2200321530143' college="Abes Engineeering College" branch="CSE-AIML" 
           pic={<img src={logo} height={100} width={40}/>} 
           />
      </div> */}
    </div>
  
  )
}

export default App
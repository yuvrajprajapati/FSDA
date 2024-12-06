import React, { useState } from "react";
import Student from "./student";
import Pic from "./Pic.jpg";
import StudentState from "./StudentState";
import ImageManipulation from "./ImageManipulation";
import UseEffectWorking from "./UseEffectWorking";
import Registration from "../Registration";
import Login from "../Login";

function App() {
  const Studentdata = {
    college: "ABES ENGINEERING",
    Pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
    Roll: "47",
    Branch: "CSEAIML",
    Name: "Aryan Kumar Rathore",
    section: "B",
  };
  const[sharedata,setShareData]=useState();
  // let a = 20;
  // let mystyle = {
  //   backgroundColor: "cyan",
  //   color: "red",
  //   border: "2px solid black",
  // };
  return (
    // <div style={{ color: "red" }}>
    //   <h2>Apna college</h2>
    //   <div style={mystyle}>{a}</div>
    <div style={{ marginLeft: "200px" }}>
      {/* <Student data={Studentdata}/> */}
      {/* <StudentState /> */}
      {/* <ImageManipulation/> */}
      {/* <UseEffectWorking/> */}
      <Registration  regdata={setShareData}/>
      {/* <Login/> */}
      <div>
        {/* <Student
        college="ABES Engineering college"
        Pic={<img src={Pic} height={80} width={80}></img>}
        Roll="47"
        Branch="CSEAIM"
        Name="Aryan Kumar Rathore"
        section="B"
        
      ></Student>
        <Student
        college="ABES Engineering college"
        Pic={<img src={Pic} height={80} width={80}></img>}
        Roll="47"
        Branch="CSEAIM"
        Name="Aryan Kumar Rathore"
        section="B"
        
      ></Student>
        <Student
        college="ABES Engineering college"
        Pic={<img src={Pic} height={80} width={100}></img>}
        Roll="47"
        Branch="CSEAIM"
        Name="Aryan Kumar Rathore"
        section="B"
        
      ></Student> */}
      </div>
    </div>
  );
}

export default App;
import React from "react";
import "./StudentStyle.css";

function Student({ data }) {
  return (
    <div style={{ border: "2px solid red", width: "200px", backgroundColor:"yellow" }}>
      {
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>{data.college}</td>
            </tr>
            <tr>
              <td colSpan={2}>
                <img src={data.Pic} height={80} width={80}></img>
              </td>
            </tr>
            <tr>
              <td>Roll:</td>
              <td>{data.Roll}</td>
            </tr>
            <tr>
              <td>Branch:</td>
              <td>{data.Branch}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{data.Name}</td>
            </tr>
            <tr>
              <td>section:</td>
              <td>{data.section}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
}
Student.defaultdata = {
  colllege: "AKG Engineering college",
};

export default Student;

import React, { useState } from "react";

function StudentState() {
  const [count, setCount] = useState(20);
  function decrement() {
    setCount(count+30);
  }
  function Increment(){
    setCount(count-10);
  }
  return (
    <div>
      StudentState
      <h2>Counter:{count}</h2>
      <div>
        <button id="btn" onClick={decrement}>
          Increment
        </button>
        <button id="btn" onClick={Increment}>
          Decrement
        </button>

      </div>
    </div>
  );
}

export default StudentState;

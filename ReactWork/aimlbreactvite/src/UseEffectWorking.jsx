import React, { useEffect, useState } from "react";

function UseEffectWorking() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    console.log("component render"+count);
  });
  function change() {
    setCount(count + 10);
  }
  return (
    <div>
      <button onClick={change}>dochange</button>
    </div>
  );
}

export default UseEffectWorking;

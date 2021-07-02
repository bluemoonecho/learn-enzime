import React, { useState } from "react";

const Counter = () => {


  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto",
        marginTop: "100px",
        alignItems: "center",
      }}
    >
      <h1>This is a counter</h1>
      <div id="counter-value" style={{ margin: "10px"}}>
        {count}
      </div>

      <button id="increment-btn" style={{ margin: "auto", width: "100px" }} onClick={()=> setCount(count + 1)}>
        increment
      </button>
      <button id="decrement-btn" style={{ margin: "auto", width: "100px" }} onClick={()=> setCount(count - 1)}>
        decrement
      </button>
    </div>
  );
};

export default Counter;

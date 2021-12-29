import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features";

function ChangeColor() {
  const [color, setColor] = useState("red");

  const dispatch = useDispatch((state) => state.ChangeColor.value);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
    </div>
  );
}

export default ChangeColor;

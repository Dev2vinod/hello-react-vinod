import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Hi({ name, boolval, number }) {
  return (
    <div>
      hello word react project {name}
      {number}
      {boolval}
      <p className="green"> hello ji kese app log sab</p>
    </div>
  );
}

ReactDOM.render(
  <Hi number={20} name="vinod singh" boolval={true} />,
  document.querySelector("#root")
);

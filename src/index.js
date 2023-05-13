import React from "react";
import { createRoot } from "react-dom";
import "../public/styles.css";

const root = createRoot(document.getElementById("root"));
const currentTime = new Date().getHours();

let greeting;
let color;

if (currentTime < 12) {
  greeting = "Good morning";
  color = "red";
} else if (currentTime < 18) {
  greeting = "Good afternoon";
  color = "green";
} else {
  greeting = "Good evening";
  color = "blue";
}

root.render(
  <div>
    <h1
      className="heading"
      style={{
        color: color
      }}
    >
      {greeting}
    </h1>
  </div>
);

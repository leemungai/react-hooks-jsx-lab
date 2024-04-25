import React from "react";
import { name, city } from "../data/data.js";

function Content() {
  return (
    <h1 style={{ color: "firebrick" }}>
      {name} is a Web Developer from {city}
    </h1>
  );
}

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      <Content />
    </div>
  );
}

export default Home;

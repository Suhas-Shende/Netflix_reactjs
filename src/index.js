import React from "react";
import ReactDOM from "react-dom";
import sdata from "./Sdata";
import "./index.css";
import Card from "./Cards";

ReactDOM.render(
  <>
    <h1 className="heading_style">A netflix movies</h1>
    <Card
      imgsrc={sdata[0].imgsrc}
      sname={sdata[0].sname}
      link={sdata[0].link}
    />
    <Card
      imgsrc={sdata[1].imgsrc}
      sname={sdata[1].sname}
      link={sdata[1].link}
    />
    <Card
      imgsrc={sdata[2].imgsrc}
      sname={sdata[2].sname}
      link={sdata[2].link}
    />
  </>,
  document.getElementById("root")
);

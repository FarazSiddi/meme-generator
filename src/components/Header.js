import React from "react";
import trollFace from "../images/Trollface.png";

export default function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <img src={trollFace} width="60px" />
        <h1 className="title">Meme Generator</h1>
        <img src={trollFace} width="60px" />
      </div>
      <h2>Insert Paragraph Here</h2>
    </header>
  );
}

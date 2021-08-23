import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from './Navbar'


export default function ScrollTest() {

  return (
    <>
      <Navbar />
        <div className="section">
          <div className="section-content" id="section1">
            <h1>Section 1</h1>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      <div className="section">
        <div className="section-content" id="section2">
          <h1>Section 2</h1>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="section">
        <div className="section-content" id="section3">
          <h1>Section 3</h1>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="section">
        <div className="section-content" id="section4">
          <h1>Section 4</h1>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div className="section">
        <div className="section-content" id="section5">
          <h1>Section 5</h1>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </>
  );

}
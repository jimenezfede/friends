import React, { useState } from "react";
import Question from "./Question";
const Awaiting = require("../assets/awaiting.jpeg").default;
const celebrate = require('../assets/celebrating.gif').default
const nooo = require('../assets/nooo.gif').default

type CategoryProps = {
  name: string;
  score: number;
  prevScore: number;
  correct: string;
  handleCategory: (id: string) => void;
};
const Category = ({ name, score, prevScore, handleCategory, correct }: CategoryProps) => {

  const selected = ({ currentTarget: { id } }: React.MouseEvent) => {
    handleCategory(id);
  };
  console.log(!correct)
  return (
    <div
      className="category-container-fluid"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <img src={
        // prevScore === score && prevScore !== 0? nooo:
        // prevScore !== score && prevScore !== 0? celebrate: Awaiting
        correct?
        ((correct === 'correct')?
        celebrate: nooo):
        Awaiting
        } width="1450" height="500" />
      <h3>{`${name} your score is: ${score}`}</h3>
      <h3 className="border-bottom">Pick a Category</h3>
      <div className="container">
        <div className="row row-cols-2">
          <button 
          className="col border" 
          role='button' 
          id='PET PEEVES' 
          onClick={selected} 
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          >PET PEEVES</button>
          <button 
          className="col border" 
          role='button' 
          id='ANCIENT HISTORY' 
          onClick={selected} 
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          >ANCIENT HISTORY</button>
          <button 
          className="col border" 
          role='button' 
          id="IT'S ALL RELATIVE" 
          onClick={selected}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          >IT'S ALL RELATIVE</button>
          <button 
          className="col border" 
          role='button' 
          id='LITERATURE' 
          onClick={selected} 
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          >LITERATURE</button>
        </div>
      </div>
    </div>
  ) 
};

export default Category;

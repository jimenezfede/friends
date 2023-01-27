import React, { useState } from "react";
import Question from "./Question";
const Awaiting = require("../assets/awaiting.jpeg").default;

type CategoryProps = {
  name: string;
  score: number;
  handleAnswer: () => void;
};
const Category = ({ name, score, handleAnswer }: CategoryProps) => {
  const [category, setCategory] = useState("");

  const selected = ({ currentTarget: { id } }: React.MouseEvent) => {
    setCategory(id);
  };

  return !category ? (
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
      <img src={Awaiting} width="1450" height="500" />
      <h3>{`${name} your score is: ${score}`}</h3>
      <h3 className="border-bottom">Pick a Category</h3>
      <div className="container">
        <div className="row row-cols-2">
          <div 
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
          >PET PEEVES</div>
          <div 
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
          >ANCIENT HISTORY</div>
          <div 
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
          >IT'S ALL RELATIVE</div>
          <div 
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
          >LITERATURE</div>
        </div>
      </div>
    </div>
  ) : (
    <Question
      name={name}
      category={category}
      score={score}
      handleAnswer={handleAnswer}
    />
  );
};

export default Category;

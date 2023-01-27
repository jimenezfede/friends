import React, { useState } from "react";
import axios from "axios";
import Category from "./Category";
// import './style.css'
const Intro = require('../assets/friendsIntro.jpeg').default

const App = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0)

  const handleSubmit = () => {
    axios
      .post("/api/users", { name: value, score})
      .then(() => setName(value))
      .catch((err) => console.log(`Post name was unsuccessful: ${err}`));
  };

  const handleAnswer = () => {
    axios
      .put("/api/users/:${name}", { score })
      .then(() => setScore(score + 1))
      .catch((err) => console.log(`Post score was unsuccessful: ${err}`));
  };
  return !name ? (
    <div>
      <img src={Intro} width='1450' height='500' />
      <div className="intro p-4">
      <h1>The One With the Apartment Bet</h1>
      <input
        placeholder="Enter Name"
        className="form-control w-25"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" && value ? handleSubmit() : null)}
      />
      <button className='m-3' type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
    </div>
  ) : (
    <Category name={name} score={score} prevScore={prevScore} handleAnswer={handleAnswer} />
  );
};

export default App;

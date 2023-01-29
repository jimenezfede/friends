import React, { useState } from "react";
import Category from "./Category";
import Question from "./Question";
const Intro = require('../assets/friendsIntro.jpeg').default

const App = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState('')
  const [correct, setCorrect] = useState('')

  const handleSubmit = () => {
    setName(value)
  };

  const handleCategory = (id: string) => {
    setCategory(id)
  }

  const resetCategory = () => {
    setCategory('')
    setCorrect('incorrect')
  }

  const handleAnswer = () => {

    setScore(score + 1)
    setCategory('')
    setCorrect('correct')
  };
  return !name ? (
    <div>
      <img className='introPic' src={Intro} width='1450' height='500' />
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
  ) : category? 
  (<Question name={name} category={category} score={score} handleAnswer={handleAnswer} resetCategory={resetCategory} />):
  (<Category name={name} score={score} handleCategory={handleCategory} correct={correct} />);
};

export default App;

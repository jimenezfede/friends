import React, { useState } from "react";
import axios from "axios";
import Category from "./Category";

const App = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);

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
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>The One With the Apartment Bet</h1>
      <label htmlFor="event-time" className="col-form-label">
        User Name:
      </label>
      <input
        className="form-control w-25"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" && value ? handleSubmit() : null)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  ) : (
    <Category name={name} score={score} handleAnswer={handleAnswer} />
  );
};

export default App;

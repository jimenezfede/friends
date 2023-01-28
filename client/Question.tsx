import React, {useState} from 'react'
const Intro = require('../assets/friendsIntro.jpeg').default
const data = require('../server/db/data')

type QuestionProps = {
  category: string;
  name: string;
  score: number;
  handleAnswer: () => void;
  resetCategory: () => void;
}

const Question = ({category, name, score, handleAnswer, resetCategory}: QuestionProps) => {
  const questions = data.filter((q: any) => q.category === category)
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
  const {question, answer, options} = randomQuestion;

  const correctAnswer = ({currentTarget: {id}}: React.MouseEvent) => {
    if (id === answer) {
      handleAnswer()
    } else {
      resetCategory()
    }
  }
  return (
    <div  
    style={{
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: 'black', 
      color: 'white'
    }}
    >
      <img src={Intro} />
      <h3>{`${name} your score is: ${score}`}</h3>
      <h3 className='border-bottom'>{question}</h3>
      <div>
        {options.map((option:any, idx:number) => (
          <li 
          className='border-bottom'
          key={idx} 
          id={option} 
          role='button' 
          onClick={correctAnswer}
          >{option}</li>
        ))}
      </div>
    </div>
  )
}

export default Question
import React, {useState} from 'react'
import Category from './Category'
const Intro = require('../assets/friendsIntro.jpeg').default
const data = require('../server/db/data')
const celebrate = require('../assets/celebrating.gif').default
const nooo = require('../assets/nooo.gif').default

type QuestionProps = {
  category: string;
  name: string;
  score: number;
  handleAnswer: () => void;
}

const Question = ({category, name, score, handleAnswer}: QuestionProps) => {
  const [next, setNext] = useState(false)
  const [prevScore, setPrevScore] = useState(score)
  const questions = data.filter((q: any) => q.category === category)
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
  const {question, answer, options} = randomQuestion;

  const correctAnswer = ({currentTarget: {id}}: React.MouseEvent) => {
    if (id === answer) {
      handleAnswer()
    }
      setNext(true)
  }
  return next? (<Category name={name} score={score} prevScore={prevScore} handleAnswer={handleAnswer} />):(
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
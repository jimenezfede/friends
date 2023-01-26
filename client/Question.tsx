import React, {useState} from 'react'
import Category from './Category'

const data = require('../server/db/data')

type QuestionProps = {
  category: string;
  name: string;
  score: number;
  handleAnswer: () => void;
}

const Question = ({category, name, score, handleAnswer}: QuestionProps) => {
  const [next, setNext] = useState(false)
  const questions = data.filter((q: any) => q.category === category)
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
  const {question, answer, options} = randomQuestion;

  const correctAnswer = ({currentTarget: {id}}: React.MouseEvent) => {
    if (id === answer) {
      handleAnswer()
    }
      setNext(true)
  }




  return next? (<Category name={name} score={score} handleAnswer={handleAnswer} />):(
    <div className='card' 
    // style={{textAlign: 'center'}}
    >
      <div>
        {`${name} your score is: ${score}`}
      </div>
      <div>
        {question}
      </div>
      <div>
        {options.map((option:any, idx:number) => (
          <ul key={idx} id={option} role='button' onClick={correctAnswer}>{option}</ul>
        ))}
      </div>
    </div>
  )
}

export default Question
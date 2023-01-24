import React, {useState} from 'react'
const data = require('../server/db/data')

type QuestionProps = {
  category: string;
  name: string;
}

const Question = ({category, name}: QuestionProps) => {
  const [score, setScore] = useState(0)
  const questions = data.filter((q: any) => q.category === category)
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  const correctAnswer = ({currentTarget: {id}}: React.MouseEvent) => {
    if (id === randomQuestion.answer) {
      setScore(score + 1)
    }
  }

  return(
    <div className='card' style={{textAlign: 'center'}}>
      <div>
        {`${name} your score is: ${score}`}
      </div>
      <div>
        {randomQuestion.question}
      </div>
      <div role='button' id={randomQuestion.answer} onClick={correctAnswer}>
        {randomQuestion.answer}
      </div>
    </div>
  )
}

export default Question
import React, {useState, useEffect} from 'react'
const Intro = require('../assets/friendsIntro.jpeg').default
const data = require('../data')

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
  const [shuffled, setShuffled] = useState([])


  useEffect(() => {
    shuffleOptions()
  })

  const shuffleOptions = () => {
   for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = options[i];
    options[i] = options[j];
    options[j] = temp;
   }
   setShuffled(options)
  }
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
      <img className='introPic' src={Intro} />
      <h3>{`${name} your score is: ${score}`}</h3>
      <h3 className='border-bottom'>{question}</h3>
      <div>
        {shuffled.map((option:any, idx:number) => (
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
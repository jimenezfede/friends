import React from 'react'
const data = require('../server/db/data')

type QuestionProps = {
  category: string;
}

type Data = {
  data: 
  [{
    category: string,
    question: string, 
    answer: string
  }];
}

const Question = ({category}: QuestionProps) => {
  const questions = data.filter((q: any) => q.category === category)
  const randomQuestion = questions[1]
  console.log(randomQuestion)

  return(
    <>
    </>
  )
}

export default Question
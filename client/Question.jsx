import React from 'react'
import data from '../server/db/data'


const Question = ({category}) => {
  const questions = data.filter(q => q.category === category)
  const randomQuestion = questions[Math.random]
  // console.log(randomQuestion)

  return(
    <>
    </>
  )
}

export default Question
import React, {useState} from 'react'
import Question from './Question'
import './style.css'
const Awaiting = require('../assets/awaiting.jpeg').default

type CategoryProps = {
  name: string;
  score: number;
  handleAnswer: () => void;
}
const Category = ({name, score, handleAnswer}: CategoryProps) => {
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState(
    ['PET PEEVES', 'ANCIENT HISTORY', `IT'S ALL RELATIVE`, 'LITERATURE']
  )

  const selected = ({currentTarget:{id}}: React.MouseEvent) => {
    setCategory(id)
  }

  return !category? (
    <div className="category">
      <img src={Awaiting} width='1450' height='550' />
      <div className='row'>
        <div className="col-sm" >
          <span><strong>{`${name} your score is: ${score}`}</strong></span>
          <br></br>
          <span className='border-bottom'>Pick a Category</span>
          {categories.map((category: string) => (
            <ul className='border cursor-pointer' role='button' id={category} onClick={selected} >{category}</ul>
          ))}
        </div>
      </div>
    </div>
  ):(<Question name={name} category={category} score={score} handleAnswer={handleAnswer} />)
};

export default Category
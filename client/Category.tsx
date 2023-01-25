import React, {useState} from 'react'
import Question from './Question'

type CategoryProps = {
  name: string;
  score: number;
  handleAnswer: () => void;
}
const Category = ({name, score, handleAnswer}: CategoryProps) => {
  const [category, setCategory] = useState('')

  const selected = ({currentTarget:{id}}: React.MouseEvent) => {
    setCategory(id)
  }

  return !category? (
    <div className="container"
      style={{textAlign: 'center'}}
    >
      <div className='row'>
        <div className="col-sm" >
          <span>{`${name} your score is: ${score}`}</span>
          <br></br>
          <span className='border-bottom'>Pick a Category</span>
          <div id='PET PEEVES' onClick={selected}>PET PEEVES</div>
          <div id='ANCIENT HISTORY' onClick={selected}>ANCIENT HISTORY</div>
          <div id="IT'S ALL RELATIVE" onClick={selected}>IT'S ALL RELATIVE</div>
        </div>
      </div>
    </div>
  ):(<Question name={name} category={category} score={score} handleAnswer={handleAnswer} />)
};

export default Category
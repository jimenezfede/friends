import React, {useState} from 'react'
import Question from './Question'

const Category = () => {
  const [category, setCategory] = useState('')

  const selected = ({currentTarget:{id}}: React.MouseEvent) => {
    setCategory(id)
    console.log(id)
  }

  return !category? (
    <div className="container"
      style={{textAlign: 'center'}}
    >
      <div className='row'>
        <div className="col-sm" >
          <span>Pick a Category</span>
          <div id='PET PEEVES' onClick={selected}>PET PEEVES</div>
          <div id='ANCIENT HISTORY' onClick={selected}>ANCIENT HISTORY</div>
        </div>
      </div>
    </div>
  ):(<Question category={category} />)
};

export default Category
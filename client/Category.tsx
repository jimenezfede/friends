import React, {useState} from 'react'
import Question from './Question'

type CategoryProps = {
  name: string;
}
const Category = ({name}: CategoryProps) => {
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
          <span>Pick a Category</span>
          <div id='PET PEEVES' onClick={selected}>PET PEEVES</div>
          <div id='ANCIENT HISTORY' onClick={selected}>ANCIENT HISTORY</div>
        </div>
      </div>
    </div>
  ):(<Question name={name} category={category} />)
};

export default Category
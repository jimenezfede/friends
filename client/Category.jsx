import React, {useState} from 'react'

const Category = ({setCategory}) => {

  const selected = ({target:{id}}) => {
    setCategory(id)
  }

  return (
    <div className="container">
      <div className='row'>
        <div className="col-sm" onClick={selected}>
          <h3 id='PET PEEVES'>PET PEEVES</h3>
          <h3 id='ANCIENT HISTORY'>ANCIENT HISTORY</h3>
        </div>
      </div>
    </div>
  )
}

export default Category
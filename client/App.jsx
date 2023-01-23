import React, {useState} from 'react'
import axios from 'axios'
import Category from './Category'
import Question from './Question'

const App = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  
  const handleInput = ({target}) => {
    const {name, value} = target
    setName(value)
  }

  const handleSubmit = () => {
      axios.post('/api/users', {name})
        .then(() => setName(''))
        .catch(err => console.log(`Post was unsuccessful: ${err}`))
  }

  return (
    <div className='card'
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >

      <h1>The One With the Apartment Bet</h1>
      <label htmlFor='event-time' className='col-form-label'>
        User Name:
      </label>
      <input 
      className='form-control w-25'
      type='text' 
      value={name}
      onChange={handleInput}
      onKeyDown={e => e.key === 'Enter' && name? handleSubmit(name): null}
      />
      <button
      type='submit'
      onClick={handleSubmit}
      >Submit</button>
      <Category setCategory={setCategory} />
      <Question category={category} />
    </div>
  ) 
  }

export default App
import React, {useState} from 'react'
import axios from 'axios'
import Category from './Category'

const App = () => {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const handleSubmit = () => {
  //   axios
  //     .post("/api/users", { name })
  //     .then(() => setName(""))
  //     .catch((err) => console.log(`Post was unsuccessful: ${err}`));
    setName(value)
  }

  return !name? (
    <div className='card'
        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
      <h1>The One With the Apartment Bet</h1>
      <label htmlFor="event-time" className="col-form-label">
        User Name:
      </label>
      <input
        className="form-control w-25"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" && value? handleSubmit() : null)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  ): (<Category name={name} />)
  }

export default App
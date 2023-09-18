import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [pets, setPets] = useState([])
  useEffect(()=>{
    const fetchPets = async()=>{
      const response = await axios.get('http://localhost:3300/api/pets')
      setPets(response.data)
    }
    fetchPets()
  }, [])
  return (
      <>
      <h1>Pets ({pets.length})</h1>
      <ul>
        {
          pets.map(thing =>{
            return(
              <li key={thing.id} className='favorite'>
                  {thing.name}
              </li>
            )
          })
        }
      </ul>
      </>
  )
}

export default App

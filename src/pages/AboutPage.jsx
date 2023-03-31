import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const AboutPage = () => {
const personas = useContext(MyContext)
  return (
    <div>
        <h1>AboutPage</h1>  
      {personas.map(person => <p key={person.id}>{person.age}</p>)}
    </div>
  )
}

export default AboutPage
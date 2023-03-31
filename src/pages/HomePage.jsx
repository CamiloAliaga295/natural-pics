import React, { useContext } from 'react'
import Hearth from '../components/Hearth'
import Galeria from '../components/Galeria'

const HomePage = () => {


  return (
    <div>
        <h1>Galeria</h1>
        <Galeria />
        <Hearth filled={false}/>

    </div>
  )
}

export default HomePage
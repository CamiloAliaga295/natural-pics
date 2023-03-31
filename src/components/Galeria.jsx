import React, { useContext } from 'react'
import { MyContext } from '../MyContext'
import Hearth from './Hearth'

const Galeria = () => {
  const fotos = useContext(MyContext)
  return (
    <div className='galeria grid-columns-5 p-3 '>
       {fotos.map(foto =>(
 <div key={foto.id}>
 <Hearth filled={false} />
</div>
       ))}
    </div>
  )
}
 
export default Galeria
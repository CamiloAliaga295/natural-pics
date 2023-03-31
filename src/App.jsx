
import './App.css'

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { MyContext } from './context/MyContext'
import Favoritos from './pages/Favoritos'


const App = () => {
  const [fotos, setFotos] = useState([]);

  const url = './src/data/data.json';

  const getPhotos = async () => {
    const res = await fetch(url);
    let { photos } = await res.json();

    photos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      alt: photo.alt,
      favorite: false
    }));


    setFotos(photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div>
      <Navbar />
   
      <MyContext.Provider value={{fotos, setFotos}}>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='favoritos' element={<Favoritos />} />

        </Routes>
      </MyContext.Provider>

    </div>
  )
}

export default App

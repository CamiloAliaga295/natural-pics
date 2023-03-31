
import './App.css'

import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import { MyContext } from './MyContext'


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
      <MyContext.Provider value={fotos}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='favoritos' element={<AboutPage />} />

        </Routes>
      </MyContext.Provider>

    </div>
  )
}

export default App

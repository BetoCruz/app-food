import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PerfilRestaurante from './pages/PerfilRestaurante'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil-restaurante" element={<PerfilRestaurante />} />
    </Routes>
  )
}

export default Rotas

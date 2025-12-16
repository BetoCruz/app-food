// routes.tsx
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import PerfilRestaurantes from '../pages/PerfilRestaurantes'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil-restaurantes/:id" element={<PerfilRestaurantes />} />
    </Routes>
  )
}

export default Rotas

// routes.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PerfilRestaurante from './pages/PerfilRestaurante'
import Checkout from './pages/Checkout'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil-restaurante" element={<PerfilRestaurante />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default Rotas

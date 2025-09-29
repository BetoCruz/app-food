// routes.tsx
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import PerfilRestaurantes from '../pages/PerfilRestaurantes'
import Cart from '../structure/components/Cart'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/perfil-restaurante" element={<PerfilRestaurante />} />
      <Route path="/checkout" element={<Checkout />} /> */}
      <Route path="/perfil-restaurantes" element={<PerfilRestaurantes />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Rotas

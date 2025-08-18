// pages/PerfilRestaurante/index.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import ListaDeProdutos from '../../containers/ListaDeProdutos'
import HomeFooter from '../../components/HomeFooter'
import { Overlay } from '../../styles'
import Cart, { CartItem, Product } from '../../components/Cart'
import { PerfilContainer } from './styles'

const PerfilRestaurante = () => {
  const navigate = useNavigate()

  const [ativarOverlay, setAtivarOverlay] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      return exists
        ? prev.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
    setAtivarOverlay(true)
  }

  const handleUpdateQuantity = (id: number, qty: number) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i))
    )
  }

  const handleCheckout = () => {
    navigate('/checkout', { state: { items: cartItems } })
  }

  const handleCloseCart = () => {
    setIsCartOpen(false)
    setAtivarOverlay(false)
  }

  return (
    <>
      <PerfilContainer>
        <Overlay active={ativarOverlay} />
        <Header
          home={false}
          cartCount={cartItems.reduce((n, i) => n + i.quantity, 0)}
        />

        <ListaDeProdutos
          setAtivarOverlay={setAtivarOverlay}
          home={false}
          ishome={false}
          onAddToCart={handleAddToCart}
        />

        <Cart
          isOpen={isCartOpen}
          items={cartItems}
          onClose={handleCloseCart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
        />
      </PerfilContainer>

      <HomeFooter />
    </>
  )
}

export default PerfilRestaurante

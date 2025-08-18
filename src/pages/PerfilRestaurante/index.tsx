import { useState } from 'react'
import Header from '../../components/Header'
import ListaDeProdutos from '../../containers/ListaDeProdutos'
import HomeFooter from '../../components/HomeFooter'
import { Overlay } from '../../styles'
import Cart, { CartItem, Product } from '../../components/Cart' // <- Tipos e componente
import { PerfilContainer } from './style'

const PerfilRestaurante = () => {
  // controla o overlay semitransparente já existente
  const [ativarOverlay, setAtivarOverlay] = useState(false)
  // estado do carrinho (itens) + abrir/fechar
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Adiciona produto ao carrinho a partir do card
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      return exists
        ? prev.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true) // abre carrinho
    setAtivarOverlay(true) // liga overlay
  }

  // Atualiza quantidade direto no carrinho
  const handleUpdateQuantity = (id: number, qty: number) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i))
    )
  }

  // Finaliza compra (simulação)
  const handleCheckout = () => {
    console.log('Pedido:', cartItems)
    alert('Compra finalizada com sucesso!')
    setCartItems([])
    setIsCartOpen(false)
    setAtivarOverlay(false)
  }

  // Fecha carrinho + overlay
  const handleCloseCart = () => {
    setIsCartOpen(false)
    setAtivarOverlay(false)
  }

  return (
    <>
      <PerfilContainer>
        <Overlay active={ativarOverlay} />
        <Header home={false} />

        {/* Passamos a função de adicionar ao carrinho para a lista de produtos */}
        <ListaDeProdutos
          setAtivarOverlay={setAtivarOverlay}
          home={false}
          ishome={false}
          onAddToCart={handleAddToCart} // <- NOVO
        />

        {/* Carrinho controlado por props */}
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

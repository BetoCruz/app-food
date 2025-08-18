// components/Cart/index.tsx
import { CartContainer, CartHeader, CartItemRow, CartFooter } from './style'

export type Product = {
  id: number
  name: string
  price: number
  image?: string
  description?: string
}

export type CartItem = Product & { quantity: number }

type Props = {
  isOpen: boolean
  items: CartItem[]
  onClose: () => void
  onUpdateQuantity: (id: number, qty: number) => void
  onCheckout: () => void
}

const Cart = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onCheckout
}: Props) => {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContainer isOpen={isOpen}>
      <CartHeader>
        <h2>Seu Carrinho</h2>
        <button aria-label="Fechar" onClick={onClose}>
          ×
        </button>
      </CartHeader>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {items.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          items.map((item) => (
            <CartItemRow key={item.id}>
              {item.image && <img src={item.image} alt={item.name} />}
              <div className="info">
                <strong>{item.name}</strong>
                <span>R$ {item.price.toFixed(2).replace('.', ',')}</span>
              </div>

              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  onUpdateQuantity(item.id, Number(e.target.value))
                }
              />

              <div className="subtotal">
                R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
              </div>
            </CartItemRow>
          ))
        )}
      </div>

      <CartFooter>
        <div className="total">
          Total: <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
        </div>
        <button
          className="checkout"
          onClick={onCheckout}
          disabled={items.length === 0}
        >
          Finalizar Compra
        </button>
      </CartFooter>
    </CartContainer>
  )
}

export default Cart

// pages/Checkout/index.tsx
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import HomeFooter from '../../components/HomeFooter'

type Item = { id: number; name: string; price: number; quantity: number }

type LocationState = {
  items?: Item[]
}

const Checkout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const state = (location.state || {}) as LocationState
  const items = state.items || []

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const count = items.reduce((n, i) => n + i.quantity, 0)

  return (
    <>
      <Header home={false} cartCount={count} />
      <div className="container" style={{ color: '#111', padding: 24 }}>
        <h1>Pagamento</h1>

        {items.length === 0 ? (
          <>
            <p>Seu carrinho está vazio.</p>
            <button onClick={() => navigate('/perfil-restaurante')}>
              Voltar ao restaurante
            </button>
          </>
        ) : (
          <>
            <ul style={{ margin: '16px 0' }}>
              {items.map((i) => (
                <li key={i.id} style={{ marginBottom: 8 }}>
                  {i.quantity}x {i.name} — R${' '}
                  {(i.price * i.quantity).toFixed(2).replace('.', ',')}
                </li>
              ))}
            </ul>

            <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>

            <button
              style={{
                marginTop: 16,
                background: '#16a34a',
                color: '#fff',
                border: 'none',
                padding: '12px 16px',
                borderRadius: 10,
                cursor: 'pointer'
              }}
              onClick={() => {
                alert('Pagamento processado! Pedido concluído. 🎉')
                navigate('/')
              }}
            >
              Pagar e Finalizar
            </button>
          </>
        )}
      </div>
      <HomeFooter />
    </>
  )
}

export default Checkout

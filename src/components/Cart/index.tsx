import { CartContainer } from './style'

const cart = () => {
  return (
    <CartContainer>
      <h2>Seu Carrinho</h2>
      {/* Aqui você pode adicionar a lógica para exibir os itens do carrinho */}
      <p>Itens no carrinho: 0</p>
      {/* Botão para finalizar a compra */}
      <button className="finalizar-compra">Finalizar Compra</button>
    </CartContainer>
  )
}

export default cart

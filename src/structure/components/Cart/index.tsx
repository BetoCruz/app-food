import {
  CardItem,
  CardItemTitle,
  CartContainer,
  TotalValueContainer,
  Button
} from './styles'
import lataDeLixo from '../../../assets/imagesEfood/lata_de_lixo.png'
import { RootReducer } from '../../../store/index'
import { useSelector } from 'react-redux'

export type Props = {
  isActive?: boolean
}

const Cart = ({ isActive }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <CartContainer isActive={isActive}>
      <div>
        {items.map((item) => (
          <CardItem key={item.id}>
            <img src={item.image} alt="" />
            <CardItemTitle>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
            </CardItemTitle>
            <img src={lataDeLixo} alt="" />
          </CardItem>
        ))}
      </div>
      <section>
        <TotalValueContainer>
          <div>
            <h3>Valor total</h3>
            <span>R$ 0,00</span>
          </div>
          <Button>Continuar com a entrega</Button>
        </TotalValueContainer>
      </section>
    </CartContainer>
  )
}

export default Cart

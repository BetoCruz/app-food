import CardFood from '../../components/cards/CardFood'
import Cart from '../../components/Cart'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../store/reducers/cart'
import {
  ListaDeElementosBlock,
  ListaDeElementosContainer,
  ModalOfCart
} from './styles'

import { RestInfos } from '../../../services/api'
import { CartItem } from '../../../store/reducers/cart'

type Props = {
  comidas?: RestInfos
  headerActiveCart: boolean
}
//-----------------------------------------------------

const RestaurantsPerfil = ({ headerActiveCart, comidas }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [activeModal, setActiveModal] = useState(false)
  const [activeCart, setActiveCart] = useState<boolean>(headerActiveCart)
  const dispatch = useDispatch()

  useEffect(() => {
    setActiveCart(headerActiveCart)
  }, [headerActiveCart])

  const putOnCart = (item: CartItem) => {
    dispatch(
      addItem({
        nome: item.nome,
        preco: item.preco,
        foto: item.foto,
        id: item.id
      })
    )
  }
  console.log(`Componente restaurantsPerfil:___${comidas}`)

  return (
    <ListaDeElementosBlock>
      <div className="container">
        <ListaDeElementosContainer>
          {comidas?.cardapio?.map((item) => (
            <CardFood
              onOffCart={activeCart}
              putOnCart={putOnCart}
              setIsActive={setIsActive}
              key={item.id}
              id={item.id}
              nome={item.nome}
              descricao={item.descricao}
              foto={item.foto}
              preco={item.preco}
              porcao={item.porcao}
            />
          ))}
        </ListaDeElementosContainer>
        <Cart
          toggleCart={activeCart}
          toggleIsActive={setIsActive}
          activeModal={setActiveModal}
          isActive={isActive}
        />
      </div>
      <ModalOfCart
        className={activeModal || activeCart ? 'visivel' : ''}
      ></ModalOfCart>
    </ListaDeElementosBlock>
  )
}
export default RestaurantsPerfil

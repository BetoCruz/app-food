import { useEffect, useState } from 'react'

import { CardFoodContainer, ModalContent, ModalOverlay } from './styles'
import { CardapioItem } from '../../../../services/api'
import { CartItem } from '../../../../store/reducers/cart'
import { on } from 'events'
type Props = CardapioItem & {
  setIsActive: (value: boolean) => void
  putOnCart: (value: CartItem) => void
  onOffCart: boolean
}

const CardFood = ({
  setIsActive,
  putOnCart,
  id,
  nome,
  descricao,
  preco,
  foto,
  porcao,
  onOffCart
}: Props) => {
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState(false)
  const [onCart, setOnCart] = useState<boolean>(onOffCart)
  const closeModal = () => {
    setModal(false)
  }
  useEffect(() => {
    setOnCart(onOffCart)
  }, [onOffCart])

  return (
    <>
      <CardFoodContainer>
        <div>
          <img src={foto} alt="{name}" />
        </div>
        <div>
          <h1> {nome} </h1>
        </div>
        <p>{descricao}</p>
        <button
          onClick={() => {
            setModal(true), setModalContent(true)
          }}
        >
          Adicionar ao carrinho
        </button>
      </CardFoodContainer>

      <ModalOverlay className={modal || onCart ? 'visivel' : ''}>
        <div
          onClick={() => {
            closeModal(), setIsActive(false)
          }}
          className="overlay"
        ></div>
        <ModalContent className={modalContent ? 'visivel' : ''}>
          <img src={foto} alt="" />
          <div>
            <h2>{nome}</h2>
            <p>{descricao}</p> <br />
            <p> Serve: de {porcao}g</p>
            <button
              onClick={() => {
                setIsActive(true),
                  setModal(true),
                  setModalContent(false),
                  // setModal(false),
                  putOnCart({
                    id,
                    nome,
                    preco,
                    foto
                  })
              }}
            >
              Adicionar ao carrinho - R$ {preco}
            </button>
          </div>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}
export default CardFood

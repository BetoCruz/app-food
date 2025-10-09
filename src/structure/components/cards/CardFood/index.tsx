import { useState } from 'react'
import { Link } from 'react-router-dom'

import FoodItemClass from '../../../../models/FoodItem'
import { CardFoodContainer, ModalContent, ModalOverlay } from './styles'

type Props = FoodItemClass & {
  setIsActive: (value: boolean) => void
  putOnCart: (value: FoodItemClass) => void
}

const CardFood = ({
  setIsActive,
  putOnCart,
  id,
  name,
  description,
  price,
  image,
  classification
}: Props) => {
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <CardFoodContainer>
        <div>
          <Link to={'/'}>
            <img src={image} alt="{name}" />
          </Link>

          <span>Destaque da semana</span>
          <span>Japonesa</span>
        </div>
        <div>
          <h1> {name} </h1>
          <span>{classification}</span>
        </div>
        <p>
          {description}
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </p>
        <button onClick={() => setModal(true)}>Saiba Mais</button>
      </CardFoodContainer>

      <ModalOverlay className={modal ? 'visivel' : ''}>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
        <ModalContent className="container-modal">
          <img src={image} alt="" />
          <div>
            <h2>{name}</h2>
            <p>{description}</p> <br />
            <button
              onClick={() => {
                setIsActive(true),
                  setModal(false),
                  putOnCart({
                    id,
                    name,
                    description,
                    price,
                    image,
                    classification
                  })
              }}
            >
              Adicionar ao carrinho - R$ {price}
            </button>
          </div>
        </ModalContent>
      </ModalOverlay>
    </>
  )
}
export default CardFood

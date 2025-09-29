import CardFood from '../../components/cards/CardFood'
import FoodItem from '../../../models/FoodItem'
import Cart from '../../components/Cart'
import pizza from '../../../assets/imagesEfood/pratos/pizza_1.png'

import { ListaDeElementosBlock, ListaDeElementosContainer } from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../store/reducers/cart'

type CartState = {
  items: FoodItem[]
}

const dataBase: CartState = {
  items: [
    {
      id: 1,
      name: 'Refeição 1',
      price: 10.99,
      quantity: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: pizza,
      classification: 4.5
    },
    {
      id: 2,
      name: 'Refeição 2',
      price: 15.99,
      quantity: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: pizza,
      classification: 3.8
    },
    {
      id: 3,
      name: 'Refeição 3',
      price: 7.99,
      quantity: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: pizza,
      classification: 4.2
    },
    {
      id: 4,
      name: 'Refeição 4',
      price: 7.99,
      quantity: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: pizza,
      classification: 4.2
    },
    {
      id: 5,
      name: 'Refeição 5',
      price: 7.99,
      quantity: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: pizza,
      classification: 4.2
    },
    {
      id: 6,
      name: 'Refeição 6',
      price: 7.99,
      quantity: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: pizza,
      classification: 4.2
    }
  ]
}

//-----------------------------------------------------

const RestaurantsPerfil = () => {
  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch()

  const putOnCart = (item: FoodItem) => {
    dispatch(
      addItem({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        description: item.description,
        image: item.image,
        classification: item.classification
      })
    )
  }

  return (
    <ListaDeElementosBlock className="container">
      <div className="container">
        <h1>Lista de Elementos</h1>
        <ListaDeElementosContainer>
          {dataBase.items.map((item) => (
            <CardFood
              putOnCart={putOnCart}
              setIsActive={setIsActive}
              key={item.id}
              id={1}
              name={item.name}
              description={item.description}
              image={item.image}
              classification={4.5}
              price={item.price}
            />
          ))}
        </ListaDeElementosContainer>
        <Cart isActive={isActive} />
      </div>
    </ListaDeElementosBlock>
  )
}
export default RestaurantsPerfil

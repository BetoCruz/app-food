import CardRestaurants from '../../components/cards/CardRestaurants'
import FoodItemClass from '../../../models/FoodItem'
import imgloja from '../../../assets/imagesEfood/pratos/la_dolce_vita_trattoria_1.png'
import {
  ListaDeRestaurantesBlock,
  ListaDeRestaurantesContainer
} from './styles'

type CartState = {
  items: FoodItemClass[]
}

const dataBase: CartState = {
  items: [
    {
      id: 1,
      name: 'Restaurante 1',
      price: 10.99,
      quantity: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: imgloja,
      classification: 4.5
    },
    {
      id: 2,
      name: 'Restaurante 2',
      price: 15.99,
      quantity: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: imgloja,
      classification: 3.8
    },
    {
      id: 3,
      name: 'Restaurante 3',
      price: 7.99,
      quantity: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: imgloja,
      classification: 4.2
    },
    {
      id: 4,
      name: 'Restaurante 4',
      price: 7.99,
      quantity: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: imgloja,
      classification: 4.2
    },
    {
      id: 5,
      name: 'Restaurante 5',
      price: 7.99,
      quantity: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: imgloja,
      classification: 4.2
    },
    {
      id: 5,
      name: 'Restaurante 5',
      price: 7.99,
      quantity: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: imgloja,
      classification: 4.2
    }
  ]
}

const RestaurantsList = () => {
  return (
    <ListaDeRestaurantesBlock className="container">
      <div className="container">
        <ListaDeRestaurantesContainer>
          {dataBase.items.map((item) => (
            <CardRestaurants
              key={item.id}
              id={1}
              name={item.name}
              description={item.description}
              image={item.image}
              classification={4.5}
            />
          ))}
        </ListaDeRestaurantesContainer>
      </div>
    </ListaDeRestaurantesBlock>
  )
}
export default RestaurantsList

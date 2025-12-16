import CardRestaurants from '../../components/cards/CardRestaurants'
import {
  ListaDeRestaurantesBlock,
  ListaDeRestaurantesContainer
} from './styles'

import {
  RestInfos,
  useGetFeaturedRestaurantsQuery
} from '../../../services/api'

const RestaurantsList = () => {
  const { data: restaurantes } = useGetFeaturedRestaurantsQuery()

  if (!restaurantes) {
    return <div>Carregando...</div>
  }

  return (
    <ListaDeRestaurantesBlock>
      <div className="container">
        <ListaDeRestaurantesContainer>
          {restaurantes.map((rest: RestInfos) => (
            <CardRestaurants
              key={rest.id}
              id={rest.id}
              titulo={rest.titulo}
              descricao={rest.descricao}
              tipo={rest.tipo}
              avaliacao={rest.avaliacao}
              destacado={rest.destacado}
              capa={rest.capa}
            />
          ))}
        </ListaDeRestaurantesContainer>
      </div>
    </ListaDeRestaurantesBlock>
  )
}
export default RestaurantsList

// const dataBase: CartState = {
//   items: [
//     {
//       id: 1,
//       name: 'Restaurante 1',
//       price: 10.99,
//       quantity: 2,
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       image: imgloja,
//       classification: 4.5
//     },
//     {
//       id: 2,
//       name: 'Restaurante 2',
//       price: 15.99,
//       quantity: 1,
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       image: imgloja,
//       classification: 3.8
//     },
//     {
//       id: 3,
//       name: 'Restaurante 3',
//       price: 7.99,
//       quantity: 3,
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       image: imgloja,
//       classification: 4.2
//     },
//     {
//       id: 4,
//       name: 'Restaurante 4',
//       price: 7.99,
//       quantity: 3,
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       image: imgloja,
//       classification: 4.2
//     },
//     {
//       id: 5,
//       name: 'Restaurante 5',
//       price: 7.99,
//       quantity: 3,
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       image: imgloja,
//       classification: 4.2
//     },
//     {
//       id: 5,
//       name: 'Restaurante 5',
//       price: 7.99,
//       quantity: 3,
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       image: imgloja,
//       classification: 4.2
//     }
//   ]
// }

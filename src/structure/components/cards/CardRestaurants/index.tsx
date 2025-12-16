// import FoodItemClass from '../../../../models/FoodItem'
import { Avaliador, CardRestauranteContainer } from './styles'
import { Link } from 'react-router-dom'
// import { CardapioItem } from '../../'
import { RestInfos } from '../../../../services/api'
import estrela from '../../../../assets/imagesEfood/estrela.png'

// type Props = FoodItemClass
// type Props = RestaurantInfos
type Props = RestInfos

const CardRestaurants = ({
  id,
  titulo,
  descricao,
  tipo,
  avaliacao,
  capa
}: Props) => {
  return (
    <CardRestauranteContainer>
      <div>
        <img src={capa} alt={titulo} />
        {/* <span>{destacado ? 'Destacado' : ''}</span> */}
        <div>
          <span>Destaque da semana</span>
          <span>{tipo}</span>
        </div>
      </div>
      <div>
        <h1> {titulo} </h1>
        <Avaliador>
          {avaliacao} <img src={estrela} />
        </Avaliador>
      </div>
      <p>{descricao}</p>
      <Link to={`/perfil-restaurantes/${id}`}>
        <button>Saiba mais</button>
      </Link>
    </CardRestauranteContainer>
  )
}
export default CardRestaurants

import FoodItemClass from '../../../../models/FoodItem'
// import imgJp from '../../../assets/imagesEfood/pratos/Hioki_Sushi.png'
import { CardRestauranteContainer } from './styles'
import { Link } from 'react-router-dom'

type Props = FoodItemClass

const CardRestaurants = ({
  id,
  name,
  description,
  image,
  classification
}: Props) => {
  return (
    <CardRestauranteContainer>
      <div>
        {/* <img src="https://placehold.co/471x217/" alt="{name}" /> */}
        <img src={image} alt="{name}" />
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
      </p>
      <Link to="/perfil-restaurantes">
        <button> Saiba Mais</button>
      </Link>
    </CardRestauranteContainer>
  )
}
export default CardRestaurants

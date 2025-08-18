import {
  CardProduto,
  Span1,
  Span2,
  Button,
  TituloH2,
  Paragrafo,
  LinkHome
} from './styles'
import img from '../../assets/imagesEfood/pratos/Hioki_Sushi.png'

export type Props = {
  onClick?: () => void
}
const Produto = ({ onClick }: Props) => {
  return (
    <CardProduto>
      <img src={img} alt="" />
      <div>
        <Span1>Destaque da seman</Span1>
        <Span2>japonesa</Span2>
        <TituloH2>Retaurante Japones</TituloH2>
        <Paragrafo>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat
          alias hic aspernatur natus ipsa eum repudiandae qui dolorum, expedita
          sint, illum eveniet ut, rem vero sunt architecto? Soluta, nulla.
        </Paragrafo>

        <Button>
          <LinkHome to={'/perfil-restaurante'}>Saiba mais</LinkHome>
        </Button>
      </div>
    </CardProduto>
  )
}

export default Produto

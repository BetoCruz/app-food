import { Link } from 'react-router-dom'
import logo from '../../assets/imagesEfood/logo.png'
import banner from '../../assets/imagesEfood/pratos/la_dolce_vita_trattoria_1.png'
import {
  ContainerTitulo,
  HeaderContainer,
  ImgBanner,
  MenuHeader,
  TextoTitulo
} from './styles'

type Props = {
  home: boolean
}

const Header = ({ home }: Props) => {
  {
    return (
      <HeaderContainer>
        {home ? (
          <>
            <ContainerTitulo>
              <img src={logo} alt="efood logo" />
            </ContainerTitulo>
            <TextoTitulo>
              <h2> Viva experiências gastronomicas no conforto da sua casa</h2>
            </TextoTitulo>
          </>
        ) : (
          <>
            <MenuHeader>
              <li>
                <Link to={'/'}>Restaurante</Link>
              </li>
              <li>
                {' '}
                <img src={logo} alt="efood logo" />
              </li>
              <li>
                <p>0 prosuto(s) no carrinho </p>
              </li>
            </MenuHeader>

            <ImgBanner>
              <img src={banner} alt="" />
            </ImgBanner>
          </>
        )}
      </HeaderContainer>
    )
  }
}

export default Header

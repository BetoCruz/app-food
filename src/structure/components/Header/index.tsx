import { FoodHeader, HeaderBlock, HeaderContainer, HeaderLink } from './styles'
import imgLogo from '../../../assets/imagesEfood/logo.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { RestInfos } from '../../../services/api'
export type Props =
  | {
      isHome: true
      comidas?: RestInfos
      toggleHeaderCart?: never
    }
  | {
      isHome?: false
      comidas?: RestInfos
      toggleHeaderCart: (value: boolean) => void
    }

const Header = (props: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <HeaderBlock>
      <>
        {props.isHome ? (
          <HeaderContainer className="container">
            <div>
              <img src={imgLogo} alt="" />
            </div>
            <div>
              <p>Viva experiências gastronômicas no conforto da sua casa</p>
            </div>
          </HeaderContainer>
        ) : (
          <FoodHeader>
            <header>
              <ul className="container">
                <li>
                  <HeaderLink to="/">Restaurantes</HeaderLink>
                </li>
                <li>
                  <img src={imgLogo} alt="" />
                </li>
                <li>
                  <HeaderLink
                    to="#"
                    onClick={() => {
                      if (props.toggleHeaderCart) {
                        props.toggleHeaderCart(true)
                      }
                    }}
                  >
                    {' '}
                    {items.length} produto(s) no carrinho
                  </HeaderLink>
                </li>
              </ul>
            </header>
            <section
              style={{
                backgroundImage: props.comidas?.capa
                  ? `url(${props.comidas.capa})`
                  : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* <section backgroundImage={comidas?.capa}> */}
              <div className="container">
                <span>
                  <h2>{props.comidas?.tipo}</h2>
                </span>
                <span>
                  <h3>{props.comidas?.titulo}</h3>
                </span>
              </div>
            </section>
          </FoodHeader>
        )}
      </>
    </HeaderBlock>
  )
}
export default Header

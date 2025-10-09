import { FoodHeader, HeaderBlock, HeaderContainer, HeaderLink } from './styles'
import imgLogo from '../../../assets/imagesEfood/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
type Props = {
  isHome?: boolean
}

const Header = ({ isHome }: Props) => {
  // const [isHome, setIsHome] = useState(false)
  return (
    <HeaderBlock className="container">
      <div className="container">
        {isHome ? (
          <HeaderContainer className="container">
            <div>
              <img src={imgLogo} alt="" />
            </div>
            <div>
              <p>Viva experiências gastronômicasno conforto da sua casa</p>
            </div>
          </HeaderContainer>
        ) : (
          <FoodHeader>
            <header>
              <ul>
                <li>
                  <HeaderLink to="/">Restaurantes</HeaderLink>
                </li>
                <li>
                  <img src={imgLogo} alt="" />
                </li>
                <li>
                  <HeaderLink to="/about">0 Produtos nocarrinho</HeaderLink>
                </li>
              </ul>
            </header>
            <section>
              <span>
                <h2>Italiana</h2>
              </span>
              <span>
                <h3>La Doce Vita Trattoria</h3>
              </span>
            </section>
          </FoodHeader>
        )}
      </div>
    </HeaderBlock>
  )
}
export default Header

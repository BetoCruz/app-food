import { BlockFooter } from './styles'
import imgLogo from '../../../assets/imagesEfood/logo.png'
import instagram from '../../../assets/imagesEfood/instagram.png'
import facebook from '../../../assets/imagesEfood/facebook.png'
import twitter from '../../../assets/imagesEfood/twitter.png'

const Footer = () => {
  return (
    <BlockFooter className="container">
      <div className="container">
        <img src={imgLogo} alt="" />
      </div>

      <div>
        <ul>
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
        </ul>
      </div>
      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </BlockFooter>
  )
}
export default Footer

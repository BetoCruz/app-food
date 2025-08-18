import logoEfood from '../../assets/imagesEfood/logo.png'
import instagram from '../../assets/imagesEfood/instagram.png'
import facebook from '../../assets/imagesEfood/facebook.png'
import twitter from '../../assets/imagesEfood/twitter.png'

// ⬇️ troque './styled' por './style'
import { Footer, LogoFooter, RedesSociais, PFooter } from './styles'

export const HomeFooter = () => {
  return (
    <Footer className="container">
      <LogoFooter src={logoEfood} alt="" />
      <RedesSociais>
        <li>
          <img src={instagram} alt="" />
        </li>
        <li>
          <img src={facebook} alt="" />
        </li>
        <li>
          <img src={twitter} alt="" />
        </li>
      </RedesSociais>
      <PFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </PFooter>
    </Footer>
  )
}

export default HomeFooter

import logoEfood from '../../assets/imagesEfood/logo.png'
import instagram from '../../assets/imagesEfood/instagram.png'
import facebook from '../../assets/imagesEfood/facebook.png'
import twitter from '../../assets/imagesEfood/twitter.png'
import { Footer, LogoFooter, RedesSociais, PFooter } from './styled'

export const HomeFooter = () => {
  return (
    <Footer className=".container">
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
        A efood é uma pFooterlataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </PFooter>
    </Footer>
  )
}

export default HomeFooter

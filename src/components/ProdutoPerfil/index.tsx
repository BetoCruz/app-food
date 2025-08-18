import {
  PerfilButton,
  PerfilParagrafo,
  PerfilTituloH2,
  CloseIcon
} from './styles'
import { CardProdutoPerfil } from './styles'
import img from '../../assets/imagesEfood/pratos/Hioki_Sushi.png'

type Props = {
  isActive: boolean
  onClose: () => void
  toggle?: () => void
  goCart?: () => void
  setAtivarOverlay?: (value: boolean) => void
}
const ProdutoPerfil = ({
  isActive,
  onClose,
  toggle,
  goCart,
  setAtivarOverlay
}: Props) => {
  return (
    <CardProdutoPerfil isActive={isActive}>
      <CloseIcon className="close-icon" onClick={onClose}>
        <p onClick={() => setAtivarOverlay && setAtivarOverlay(false)}>x</p>{' '}
      </CloseIcon>

      <img src={img} alt="" />
      <div>
        <PerfilTituloH2>Retaurante Japones</PerfilTituloH2>
        <PerfilParagrafo>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat
          alias hic aspernatur natus ipsa eum repudiandae qui dolorum, expedita
          sint, illum eveniet ut, rem vero sunt architecto? Soluta, nulla.
        </PerfilParagrafo>
        {isActive ? (
          <>
            <PerfilButton onClick={goCart} className="perfil-button">
              Adicionar ao Carrinho - R$60,90
            </PerfilButton>
          </>
        ) : (
          <>
            <PerfilButton onClick={toggle} className="perfil-button">
              <p onClick={() => setAtivarOverlay && setAtivarOverlay(true)}>
                {' '}
                Mais detalhes{' '}
              </p>
            </PerfilButton>
          </>
        )}
      </div>
    </CardProdutoPerfil>
  )
}

export default ProdutoPerfil

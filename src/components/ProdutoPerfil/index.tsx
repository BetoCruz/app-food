// components/ProdutoPerfil/index.tsx
import {
  PerfilButton,
  PerfilParagrafo,
  PerfilTituloH2,
  CloseIcon
} from './styles'
import { CardProdutoPerfil } from './styles'
import img from '../../assets/imagesEfood/pratos/Hioki_Sushi.png'

export type Product = {
  id: number
  name: string
  price: number
  image?: string
  description?: string
}

type Props = {
  isActive: boolean
  onClose: () => void
  toggle?: () => void
  goCart?: (product: Product) => void
  setAtivarOverlay?: (value: boolean) => void
  product?: Product
}

const ProdutoPerfil = ({
  isActive,
  onClose,
  toggle,
  goCart,
  setAtivarOverlay,
  product = {
    id: 1,
    name: 'Restaurante Japonês',
    price: 60.9,
    image: img,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
  }
}: Props) => {
  return (
    <CardProdutoPerfil isActive={isActive}>
      <CloseIcon className="close-icon" onClick={onClose}>
        <p onClick={() => setAtivarOverlay && setAtivarOverlay(false)}>x</p>
      </CloseIcon>

      <img src={product.image || img} alt={product.name} />
      <div>
        <PerfilTituloH2>{product.name}</PerfilTituloH2>
        <PerfilParagrafo>{product.description}</PerfilParagrafo>

        {isActive ? (
          <PerfilButton
            onClick={() => {
              goCart && goCart(product)
              setAtivarOverlay && setAtivarOverlay(true)
            }}
            className="perfil-button"
          >
            Adicionar ao Carrinho - R${' '}
            {product.price.toFixed(2).replace('.', ',')}
          </PerfilButton>
        ) : (
          <PerfilButton onClick={toggle} className="perfil-button">
            <p onClick={() => setAtivarOverlay && setAtivarOverlay(true)}>
              Mais detalhes
            </p>
          </PerfilButton>
        )}
      </div>
    </CardProdutoPerfil>
  )
}

export default ProdutoPerfil

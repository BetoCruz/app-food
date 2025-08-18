import {
  PerfilButton,
  PerfilParagrafo,
  PerfilTituloH2,
  CloseIcon
} from './styles'
import { CardProdutoPerfil } from './styles'
import img from '../../assets/imagesEfood/pratos/Hioki_Sushi.png'

// Tipo de produto exibido no card
export type Product = {
  id: number
  name: string
  price: number
  description?: string
  image?: string
}

type Props = {
  isActive: boolean
  onClose: () => void
  toggle?: () => void
  // agora goCart recebe o produto
  goCart?: (product: Product) => void
  setAtivarOverlay?: (value: boolean) => void
  product?: Product // <- produto do card
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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: img
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
          // Quando ativo, mostra botão para adicionar ao carrinho
          <PerfilButton
            onClick={() => {
              goCart && goCart(product) // envia dados do card
              setAtivarOverlay && setAtivarOverlay(true) // liga overlay
            }}
            className="perfil-button"
          >
            Adicionar ao Carrinho - R${' '}
            {product.price.toFixed(2).replace('.', ',')}
          </PerfilButton>
        ) : (
          // Quando inativo, mostra "Mais detalhes"
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

// containers/ListaDeProdutos/index.tsx
import { ListaContainer } from './styles'
import Produto from '../../components/Produto'
import ProdutoPerfil, { Product } from '../../components/ProdutoPerfil'
import hiokiSushi from '../../assets/imagesEfood/pratos/Hioki_Sushi.png'
import { useState } from 'react'

const dataBase: Product[] = [
  { id: 1, name: 'Hioki Sushi', price: 60.9, image: hiokiSushi },
  { id: 2, name: 'Burger Artesanal', price: 28.0, image: hiokiSushi },
  { id: 3, name: 'Cerveja IPA', price: 18.5, image: hiokiSushi },
  { id: 4, name: 'Sobremesa Especial', price: 22.0, image: hiokiSushi }
]

type Props = {
  home?: boolean
  ishome?: boolean
  setAtivarOverlay?: (value: boolean) => void
  onAddToCart?: (product: Product) => void
}

const ListaDeProdutos = ({
  home,
  ishome,
  setAtivarOverlay,
  onAddToCart
}: Props) => {
  const [DestacarCard, setDestacarCard] = useState(false)

  return (
    <div className="container">
      <ListaContainer ishome={ishome}>
        {home ? (
          <>
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
          </>
        ) : (
          <>
            {dataBase.map((p, idx) => (
              <ProdutoPerfil
                key={p.id}
                product={p}
                setAtivarOverlay={setAtivarOverlay}
                goCart={(prod) => onAddToCart && onAddToCart(prod)}
                onClose={() => setDestacarCard(false)}
                isActive={idx === 0 ? DestacarCard : false}
                toggle={() => setDestacarCard(true)}
              />
            ))}
          </>
        )}
      </ListaContainer>
    </div>
  )
}

export default ListaDeProdutos

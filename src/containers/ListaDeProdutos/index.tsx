// containers/ListaDeProdutos/index.tsx
import ProdutoPerfil, { Product } from '../../components/ProdutoPerfil'

type Props = {
  onAddToCart: (product: Product) => void
  setAtivarOverlay: (v: boolean) => void
  home?: boolean
  ishome?: boolean
}

const produtos: Product[] = [
  { id: 1, name: 'Hioki Sushi', price: 60.9 },
  { id: 2, name: 'Burger Artesanal', price: 28.0 },
  { id: 3, name: 'Cerveja IPA', price: 18.5 }
]

// Renderiza um grid 3 colunas com N cards
const ListaDeProdutos = ({ onAddToCart, setAtivarOverlay }: Props) => {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}
    >
      {produtos.map((p) => (
        <ProdutoPerfil
          key={p.id}
          isActive={true}
          onClose={() => setAtivarOverlay(false)}
          toggle={() => setAtivarOverlay(true)}
          setAtivarOverlay={setAtivarOverlay}
          goCart={(prod) => onAddToCart(prod)} // <- liga no handler da página
          product={p}
        />
      ))}
    </div>
  )
}

export default ListaDeProdutos

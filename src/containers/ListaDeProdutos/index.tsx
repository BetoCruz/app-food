import { ListaContainer } from './styles'
import Produto from '../../components/Produto'
import ProdutoPerfil from '../../components/ProdutoPerfil'
import hiokiSushi from '../../assets/imagesEfood/pratos/Hioki_Sushi.png'
import { useState } from 'react'

const dataBase = [
  {
    id: 1,
    title: 'Hioki Sushi',
    img: { hiokiSushi },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit '
  },
  {
    id: 2,
    title: 'Hioki Sushi',
    img: { hiokiSushi },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit '
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    img: { hiokiSushi },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit '
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    img: { hiokiSushi },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit '
  }
]

type Props = {
  home?: boolean
  ishome?: boolean
  setAtivarOverlay?: (value: boolean) => void
}
const ListaDeProdutos = ({ home, ishome, setAtivarOverlay }: Props) => {
  const [DestacarCard, setDestacarCard] = useState(false)
  const [showCart, setShowCart] = useState(false)

  return (
    <div className="container">
      <ListaContainer ishome={ishome}>
        <>
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
              <ProdutoPerfil
                setAtivarOverlay={setAtivarOverlay}
                goCart={() => setShowCart(true)}
                onClose={() => setDestacarCard(false)}
                isActive={DestacarCard}
                toggle={() => setDestacarCard(true)}
              />
              <ProdutoPerfil
                setAtivarOverlay={setAtivarOverlay}
                goCart={() => setShowCart(true)}
                onClose={() => setDestacarCard(false)}
                isActive={false}
                toggle={() => setDestacarCard(true)}
              />
              <ProdutoPerfil
                setAtivarOverlay={setAtivarOverlay}
                goCart={() => setShowCart(true)}
                onClose={() => setDestacarCard(false)}
                isActive={false}
                toggle={() => setDestacarCard(true)}
              />
              <ProdutoPerfil
                setAtivarOverlay={setAtivarOverlay}
                goCart={() => setShowCart(true)}
                onClose={() => setDestacarCard(false)}
                isActive={false}
                toggle={() => setDestacarCard(true)}
              />
              <ProdutoPerfil
                setAtivarOverlay={setAtivarOverlay}
                goCart={() => setShowCart(true)}
                onClose={() => setDestacarCard(false)}
                isActive={false}
                toggle={() => setDestacarCard(true)}
              />
              <ProdutoPerfil
                setAtivarOverlay={setAtivarOverlay}
                goCart={() => setShowCart(true)}
                onClose={() => setDestacarCard(false)}
                isActive={false}
                toggle={() => setDestacarCard(true)}
              />
            </>
          )}
        </>
      </ListaContainer>
    </div>
  )
}
export default ListaDeProdutos

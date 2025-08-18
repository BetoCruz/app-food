import Header from '../../components/Header'
import ListaDeProdutos from '../../containers/ListaDeProdutos'
import HomeFooter from '../../components/HomeFooter'

const Home = () => (
  <>
    <Header home={true} />
    <ListaDeProdutos
      home={true}
      ishome={true}
      // passa funções vazias porque a Home não usa carrinho/overlay
      onAddToCart={() => undefined}
      setAtivarOverlay={() => undefined}
    />
    <HomeFooter />
  </>
)

export default Home

import Header from '../../components/Header'
import ListaDeProdutos from '../../containers/ListaDeProdutos'
import HomeFooter from '../../components/HomeFooter'

const Home = () => (
  <>
    <Header home={true} />
    <ListaDeProdutos home={true} ishome={true} />
    <HomeFooter />
  </>
)

export default Home

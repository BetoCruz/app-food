// Update the import path if necessary, for example:
import Header from '../../structure/components/Header'
import RestaurantsList from '../../structure/containers/RestaurantsList'
import Footer from '../../structure/components/Footer'
// import { useGetFeaturedRestaurantsQuery } from '../../services/api'

const Home = () => {
  return (
    <div>
      <Header isHome={true} />
      <RestaurantsList />
      <Footer />
    </div>
  )
}
export default Home

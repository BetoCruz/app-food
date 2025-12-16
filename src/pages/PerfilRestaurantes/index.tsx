import Header from '../../structure/components/Header'
import RestaurantsPerfil from '../../structure/containers/RestaurantsPerfil'
import Footer from '../../structure/components/Footer'
import { useParams } from 'react-router-dom'
import { useGetFeaturedCardapioQuery } from '../../services/api'
import { useState } from 'react'

const PerfilRestaurantes = () => {
  const { id } = useParams()
  const { data: comidas } = useGetFeaturedCardapioQuery(id!)
  console.log(comidas)
  const [toggleHeaderCart, setToggleHeaderCart] = useState(false)

  return (
    <>
      <Header
        toggleHeaderCart={setToggleHeaderCart}
        comidas={comidas}
        isHome={false}
      />
      <RestaurantsPerfil
        headerActiveCart={toggleHeaderCart}
        comidas={comidas}
      />
      <Footer />
    </>
  )
}

export default PerfilRestaurantes

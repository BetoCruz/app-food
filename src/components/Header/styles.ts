import styled from 'styled-components'
import { cores } from '../../styles'
import vetorHaeder from '../../assets/imagesEfood/Vector.png'

export const HeaderContainer = styled.header`
  max-width: 1024px;
  height: 384px;
  margin: 0 auto;

  background-image: url(${vetorHaeder});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContainerTitulo = styled.div`
  width: 125px;
  height: 57.5px;
  margin-top: 24px;
  background-color: ${cores.branca};
  // border: 5px solid ${cores.salmon};
`

export const TextoTitulo = styled.div`
  width: 539px;
  height: 84px;
  margin-top: 150px;
  color: ${cores.salmon};
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  line-height: center;
  text-align: center;
  horirizal-align: center;
`
export const ImgBanner = styled.div`
  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
  width: 1024px;
  height: 280px;
`
export const MenuHeader = styled.ul`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;

  li {
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    color: ${cores.salmon};
    a {
      text-decoration: none;
      color: ${cores.salmon};
    }
  }
`

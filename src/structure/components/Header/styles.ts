import styled from 'styled-components'
import imgHeader from '../../../assets/imagesEfood/Vector.png'
import imgHeaderHero from '../../../assets/imagesEfood/pratos/la_dolce_vita_trattoria_2.png'
import { cores } from '../../../styles/styles'
import { Link } from 'react-router-dom'

export const HeaderBlock = styled.div`
  width: 100%;
  background-image: url(${imgHeader});
`
export const HeaderContainer = styled.div`
  width: 2031.81px;
  height: 384px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div:nth-child(2) {
    width: 70%;
    margin-top: 64px;
    font-size: 36px;

    color: ${cores.salmon};
    text-align: center;
  }
`
export const FoodHeader = styled.header`

  header {
    height: 186px;
    width: 100%;
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }

  section {
    height: 280px;
    background-image: url(${imgHeaderHero});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }

  span {
    z-index: 1;
    position: relative;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin: 24px 0 24px 24px;

    & h2 {
      font-size: 24px;
      font-weight: 100;
    }

    & h3 {
      font-size: 24px;
      font-weight: 700;
    }
  }



`
export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${cores.salmon};
  font-size: 18px;
  font-weight: 900;
  font-family: 'Roboto', sans-serif;
`

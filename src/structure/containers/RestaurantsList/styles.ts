import styled from 'styled-components'
import { cores } from '../../../styles/styles'

export const ListaDeRestaurantesBlock = styled.div`
  width: 100%;
  background-color: ${cores.begeClaro};
`
export const ListaDeRestaurantesContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  max-width: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  row-gap: 60px;
  background-color: ${cores.begeClaro};
`

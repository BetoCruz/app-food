import styled from 'styled-components'
import { cores } from '../../../styles/styles'

export const ListaDeRestaurantesBlock = styled.div`
  width: 100%;
  background-color: ${cores.begeClaro};
`
export const ListaDeRestaurantesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  row-gap: 24px;
  background-color: ${cores.begeClaro};
`

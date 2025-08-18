import styled from 'styled-components'
import { cores } from '../../styles'

type GridPerfil = {
  ishome?: boolean
}

export const ListaContainer = styled.div<GridPerfil>`
  display: grid;

  grid-template-columns: ${({ ishome }) =>
    ishome ? 'repeat(2, 1fr);' : 'repeat(3, 1fr);'};
  gap: 40px;
  max-width: 1024px;
  width: 100%;
  padding: 50px 100px;
  background-color: ${cores.begeClaro};
  position: relative;
`

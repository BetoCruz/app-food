import styled from 'styled-components'
import { cores } from '../../../styles/styles'

export const ListaDeElementosBlock = styled.div`
  width: 100%;
  background-color: ${cores.begeClaro};
`
export const ListaDeElementosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: auto;
  row-gap: 24px;
  padding: 16px;
  position: relative;
`
export const ModalOfCart = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  &.visivel {
    display: flex;
    z-index: 1;
  }
`

import styled, { css } from 'styled-components'
import { cores } from '../../styles'

type PerfilProps = {
  isActive?: boolean
}

export const CardProdutoPerfil = styled.div<PerfilProps>`
  background-color: ${cores.salmon};
  color: ${cores.branca};
  border: 7px solid ${cores.salmon};
  cursor: pointer;
  // transition: all 0.3s ease;
  z-index: ${({ isActive }) => (isActive ? 10 : 1)};
  position: ${({ isActive }) => (isActive ? 'fixed' : 'relative')};

  ${({ isActive }) =>
    isActive &&
    css`
      display: flex;
      width: auto;
      padding: 16px;
      background-color: ${cores.salmon};
      color: ${cores.branca};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 30px rgba(5, 3, 3, 0.6);

      .close-icon {
        display: Block;
        position: absolute;
        top: 5px;
        right: 5px;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 18px;
        color: ${cores.bege};
      }

      div {
        margin-left: 16px;
      }
      .perfil-button {
        max-width: 204px;
        width: 100%;
        height: 24px;
        font-size: 12px;
        align-items: center;
        margin-top: 8px;
        padding: 6px;
      }
    `}

  img {
    max-width: 304px;
    width: 100%;
    height: 167px;
  }
`
export const PerfilTituloH2 = styled.h2`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 8px;
`
export const PerfilButton = styled.button`
  border: none;
  width: 100%;
  align-items: center;
  background-color: ${cores.bege};
  color: ${cores.salmon};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  padding: 8px;
`
export const PerfilParagrafo = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
  line-height: 22px;
`
export const CloseIcon = styled.button<PerfilProps>`
  display: none;
`

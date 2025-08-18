import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const CardProduto = styled.div`
  background-color: ${cores.brancaCard};
  color: ${cores.salmon};
  border: 1px solid ${cores.salmon};
  cursor: pointer;
  position: relative;

  img {
    max-width: auto;
    width: 100%;
    height: 217px;
  }

  &:hover {
    transform: scale(1.01);
    transition: all 0.3s ease;
  }
`
export const Span1 = styled.span`
  background-color: ${cores.salmon};
  color: ${cores.branca};
  position: absolute;
  top: 8px;
  right: 80px;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
`
export const Span2 = styled.span`
  background-color: ${cores.salmon};
  color: ${cores.branca};
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
`
export const TituloH2 = styled.h2`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  margin: 8px 0px 24px 8px;
`
export const Button = styled.button`
  background-color: ${cores.salmon};
  color: ${cores.branca};
  width: 82px;
  height: 24px;
  margin: 24px 0px 8px 8px;
  border: 1px solid ${cores.salmon};
`
export const LinkHome = styled(Link)`
  text-decoration: none;
  background-color: ${cores.salmon};
  color: ${cores.branca};
  width: 82px;
  height: 24px;
  margin: 24px 0px 8px 8px;
  border: 1px solid ${cores.salmon};
`

export const Paragrafo = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  margin-left: 8px;
`

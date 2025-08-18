import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.footer`
  background-color: ${cores.bege};
  max-width: 1024px;
  height: 298px;
  margin: 0 auto;
  padding: auto;
  color: ${cores.salmon};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoFooter = styled.img`
  max-width: 125px;
  width: 100%;
  height: 57.5px;
  margin-top: 50px;
`

export const RedesSociais = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    margin-top: 32px;
    margin-left: 8px;
  }
`
export const PFooter = styled.p`
  font-size: 10px;
  width: 480px;
  text-align: center;
  margin-top: 70px;
`

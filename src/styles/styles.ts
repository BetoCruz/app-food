import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  branca: '#ffffffff',
  brancaCard: '#FFFFFF',
  preta: '#111111',
  cinza: ' #333333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  salmon: '#E66767',
  bege: '#FFEBD9',
  amarelo: '#FFB930',
  begeClaro: '#fdf4ecff'
}

type OverlayProps = {
  active?: boolean
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body{
    // color: ${cores.branca};
    // padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Overlay = styled.div<OverlayProps>`
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

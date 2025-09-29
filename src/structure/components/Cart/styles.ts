import styled from 'styled-components'
import { cores } from '../../../styles/styles'
import { Link } from 'react-router-dom'
import type { Props } from './index'

type stylesProps = {
  isActive: Props['isActive']
  // isActive: boolean
}

export const CartContainer = styled.aside<stylesProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;

  // display: block;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};

  width: 360px;
  height: 100vh;
  padding-top: 40px;
  padding-left: 16px;

  background-color: #e66767;

  > div {
    overflow-y: scroll;
    height: 80%;
    // border: 2px solid green;
  }
`
export const CardItem = styled.div`
  display: flex;
  padding: 8px;
  // border: 2px solid red;
  background-color: ${cores.bege};
  margin: 16px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const CardItemTitle = styled.div`
  display: block;
  margin-left: 8px;
  align-self: center;
  flex: 1;
  color: ${cores.salmon};

  h2,
  h3 {
    font-size: 18px;
  }
`

export const TotalValueContainer = styled.div`
  display: block;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3,
  span {
    color: ${cores.bege};
  }
`
export const Button = styled.button`
  display: block;
  width: 333px;
  color: ${cores.salmon};
  background-color: ${cores.bege};
  border: none;
`

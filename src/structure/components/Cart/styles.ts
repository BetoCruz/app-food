import styled from 'styled-components'
import { cores } from '../../../styles/styles'
import { Link } from 'react-router-dom'
import type { Props } from './index'

type stylesProps = {
  isActive: Props['isActive']
}

export const CartContainer = styled.aside<stylesProps>`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;

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
  }
`
export const CardItem = styled.div`
  display: flex;
  padding: 8px;
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
  margin-top: 16px;

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
  width: 333px;
  height: 24px;
  color: ${cores.salmon};
  background-color: ${cores.bege};
  border: none;
  border-radius: 4px;
  margin-top: 8px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 32px;

  h3 {
    color: ${cores.bege};
    align-self: flex-start;
  }

  > section {
    display: flex;
    justify-content: space-between;

    > div {
      width: 48%;

      > input {
        width: 100%;
      }
    }
  }

  label {
    align-self: flex-start;
    color: ${cores.bege};
  }

  input {
    width: 344px;
    height: 32px;
    padding: 0 16px;
    border-radius: 4px;
    border: none;
    background-color: ${cores.bege};
  }

  button {
    width: 333px;
    height: 24px;
    color: ${cores.salmon};
    background-color: ${cores.bege};
    border: none;
    border-radius: 4px;
  }
`
export const Final = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  color: ${cores.bege};
`

export const FinalButton = styled(Link)`
  width: 333px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  text-decoration: none;
  color: ${cores.salmon};
  background-color: ${cores.bege};
  border: none;
  border-radius: 4px;
`

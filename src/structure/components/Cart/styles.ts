import styled from 'styled-components'
import { cores } from '../../../styles/styles'
import { Link } from 'react-router-dom'
import type { Props } from './index'

type stylesProps = {
  isActive: Props['isActive']
  // toggleCart?: Props['toggleCart']
}

// export const OverlayCart = styled.div<stylesProps>`
//   display: ${({ isActive }) => (isActive ? 'block' : 'none')};
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
//   width: 100%;
//   height: 100%;
//   background: rgba(45, 44, 22, 0.6);
// `

export const CartContainer = styled.aside<stylesProps>`
  .visivel {
    display: flex;
  }
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;

  display: ${({ isActive }) => (isActive ? 'block' : 'none')};

  width: 360px;
  height: 100vh;
  padding-top: 16px;
  padding-left: 8px;

  background-color: #e66767;

  & > div {
    margin-bottom: 40px;
  }
`

export const CardItem = styled.div`
  width: 344px;
  display: flex;
  padding: 8px;
  background-color: ${cores.bege};
  margin: 16px 0;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  img:last-child {
    width: 16px;
    height: 16px;
    align-self: center;
    cursor: pointer;
    align-self: flex-end;
  }
`
export const CardItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
  flex: 1;
  color: ${cores.salmon};

  h2 {
    font-size: 18px;
    margin-bottom: 4px;
  }
  h3 {
    font-size: 14px;
    margin-bottom: 24px;
  }
`

export const TotalValueContainer = styled.div`
  display: block;

  & > div {
    width: 344px;
    display: flex;
    justify-content: space-between;
    padding: 0 4px;
    // border: 1px solid blue;
  }

  h3,
  span {
    color: ${cores.bege};
    font-size: 14px;
    font-weight: 700;
    margin: 16px 0 8px;
  }
`
export const Button = styled.button`
  width: 344px;
  height: 24px;
  color: ${cores.salmon};
  background-color: ${cores.bege};
  border: none;
  margin-top: 8px;
  font-weight: 700;
  font-size: 14px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  width: 360px;
  padding-right: 16px;
  letter-spacing: 0.5px;

  h3 {
    color: ${cores.bege};
    align-self: flex-start;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  > section {
    max-width: 360px;
    display: flex;
    justify-content: space-between;
    gap: 36px;

    & > div {
      width: 155px;
      & > input {
        width: 100%;
        margin-top: 8px;
      }
    }
  }

  label {
    align-self: flex-start;
    color: ${cores.bege};
    font-size: 14px;
    font-weight: 700;
  }

  input {
    border: none;
    outline: none;
    width: 344px;
    height: 32px;
    padding: 0 16px;
    border: none;
    background-color: ${cores.bege};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;

    /* Remove arrows from number input */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`
export const DivButtons = styled.div`
  margin-top: 16px;
`
export const Final = styled.section`
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;
  color: ${cores.bege};

  h2 {
    line-height: 100%;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    line-height: 22px;
    letter-spacing: 0.5px;
    font-size: 14px;
    font-weight: 400;
  }
`

export const FinalButton = styled(Link)`
  width: 344px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  text-decoration: none;
  color: ${cores.salmon};
  background-color: ${cores.bege};
  border: none;
  margin-top: 16px;
`
export const CreditCardNumberCvv = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 0px 32px;
  font-size: 14px;
  font-weight: 700;
  width: 360px;

  > div {
    margin: 0px 8px;
    & > input {
      margin-top: 8px;
    }
  }

  & > div:nth-child(1) {
    width: 228px;
  }
  > div:nth-child(2) {
    width: 87px;
  }
`
export const CreditCarMonthYear = styled.section`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;

  > div {
    margin: 0px 8px ;
    width: 155px;
    & > input {
      margin-top: 8px;
      }
`

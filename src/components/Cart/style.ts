import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
  }

  .finalizar-compra {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #218838;
    }
  }
`

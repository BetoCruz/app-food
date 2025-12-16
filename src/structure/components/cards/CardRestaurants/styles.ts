import styled from 'styled-components'
import { cores } from '../../../../styles/styles'

export const CardRestauranteContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 472px;
  height: 398px;
  border: 1px solid ${cores.salmon};
  background-color: #fff;
  color: ${cores.salmon};

  div:nth-child(1) {
    // position: absolute;
    // top: 8px;
    // left: 8px;
    // background-color: ${cores.branca};

    img {
      width: 472px;
      height: 217px;
      object-fit: cover;
    }

    > div {
      position: absolute;
      top: 16px;
      right: 8px;
      color: ${cores.branca};

      span:nth-child(1),
      span:nth-child(2) {
        margin-right: 8px;
        padding: 4px 8px;
        font-size: 12px;
        background-color: ${cores.salmon};
      }
    }
  }

  h1 {
    font-size: 18px;
    margin-bottom: 8px;
    padding-left: 6px;
  }

  p {
    padding-left: 6px;
    font-size: 14px;
    margin-bottom: 8px;
    line-height: 1.6em;
    overflow: hidden; /* esconde o excesso */

    // text-overflow: ellipsis; /* adiciona "..." no final */
    // white-space: nowrap; /* impede quebra de linha */
    // width: 200px;
  }

  button {
    background-color: ${cores.salmon};
    color: white;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    margin: 8px;
    // aline-items: center;
    font-size: 1rem;

    &:hover {
      background-color: #fb8080ff;
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }
`

export const Avaliador = styled.div`
  margin-right: 8px;
  top: 0.5px;
  margin-left: 8px;
  display: flex;
  img {
    width: 21px;
    height: 20px;
    margin-left: 5px;
  }
`

import styled from 'styled-components'
import { cores } from '../../../../styles/styles'

export const CardFoodContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  background-color: ${cores.salmon};
  color: ${cores.bege};

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  h1 {
    font-weight: 900;
    font-size: 1rem;
    margin-bottom: 8px;
    padding-left: 6px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    padding-left: 6px;
    margin-bottom: 8px;
    line-height: 1.6rem;
    overflow: hidden;
  }

  button {
    font-weight: 700;
    background-color: ${cores.bege};
    color: white;
    border: none;
    padding: 10px;
    // border-radius: 4px;
    cursor: pointer;
    color: ${cores.salmon};
    font-size: 14px;
    font-weight: bold;

    &:hover {
      background-color: #faf4f4ff;
    }
  }
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
}
`
export const ModalContent = styled.div`
  z-index: 1;
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  width: 1024px;
  height: 344px;
  background-color: ${cores.salmon};

  &.visivel {
    display: flex;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 24px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 14px;


    padding: 16px;
    color: ${cores.branca};

    h2 {
      font-size: 18px;
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
      margin-bottom: 16px;
    }

    button {
      background-color: ${cores.bege};
      margin-top: 16px;
      padding: 4px;
      border: none;
      text-decoration: none;
      cursor: pointer;
      color: ${cores.salmon};
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 14px;
    } ;
    }
  }
`

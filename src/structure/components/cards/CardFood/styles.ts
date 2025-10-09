import styled from 'styled-components'
import { cores } from '../../../../styles/styles'

export const CardFoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  // background-color: #e76c6cff;
  background-color: ${cores.salmon};
  color: ${cores.bege};

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    // color: #333;
  }

  p {
    font-size: 1rem;
    // color: #666666ff;
    margin-bottom: 16px;
  }

  button {
    // background-color: #fefefeff;
    background-color: ${cores.bege};
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
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
  border: 5px solid red;

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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1024px;
  height: 344px;
  background-color: ${cores.salmon};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 24px;


  }

  > div {
    display: block;
    padding: 16px;
    color: ${cores.branca};

    h2 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }
    p {
      font-size: 1rem;
      margin-bottom: 16px;
    }

    button {
      margin-top: 16px;
      background-color: ${cores.bege};
      text-decoration: none;
      font-size: 1rem;
      padding: 8px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      color: ${cores.salmon};
    } ;
    }
  }
`

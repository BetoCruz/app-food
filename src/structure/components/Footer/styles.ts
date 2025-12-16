import styled from 'styled-components'
import { cores } from '../../../styles/styles'
export const BlockFooter = styled.div`
  width: 100%;
  background-color: #ffebd9;
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }

  > div:nth-child(2) {
    margin-top: 2px;
    padding-top: 1px;
    ul {
      display: flex;
      gap: 16px;
      list-style: none;
    }
  }

  > div:nth-child(3) {
    width: 480px;
    p {
      color: ${cores.salmon};
      width: 600px;
      text-align: center;
      font-size: 10px;
    }
  }
`

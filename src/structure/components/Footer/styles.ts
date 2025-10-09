import styled from 'styled-components'
import { cores } from '../../../styles/styles'
export const BlockFooter = styled.div`
  width: 100%;
  background-color: #ffebd9;
  width: 2031.81px;
  height: 384px;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: center;
    margin-top: 64px;
  }

  > div:nth-child(2) {
    margin-top: 32px;
    ul {
      display: flex;
      gap: 16px;
      list-style: none;
    }
  }

  > div:nth-child(3) {
    p {
      color: ${cores.salmon};
      width: 600px;
    }
  }
`

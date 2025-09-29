import styled from 'styled-components'

export const CardRestauranteContainer = styled.div`
  display: block;
  // flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 16px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`

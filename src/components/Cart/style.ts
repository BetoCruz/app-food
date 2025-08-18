// components/Cart/style.ts
import styled from 'styled-components'

export const CartContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0; /* nasce no canto esquerdo */
  height: 100vh;
  width: 420px; /* largura do painel */
  background: #fff;
  border-right: 1px solid #e5e7eb;
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  padding: 16px;
  z-index: 1000;

  /* animação: fora da tela (-100%) -> posição natural (0) */
  transform: translateX(${(p) => (p.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
`

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;

  h2 {
    margin: 0;
    font-size: 1.25rem;
  }
  button {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    line-height: 1;
  }
`

export const CartItemRow = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr 80px 100px;
  gap: 12px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f1f5f9;

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 8px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  input {
    width: 80px;
    padding: 6px 8px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  }

  .subtotal {
    text-align: right;
    font-weight: 600;
  }
`

export const CartFooter = styled.div`
  border-top: 1px solid #f1f5f9;
  padding-top: 12px;
  display: grid;
  grid-template-columns: 1fr 180px;
  gap: 12px;
  align-items: center;

  .total {
    font-size: 1rem;
  }

  .checkout {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 12px 14px;
    cursor: pointer;
    background: #16a34a;
    color: #fff;
    font-weight: 600;
  }

  .checkout:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

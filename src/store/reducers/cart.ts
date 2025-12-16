import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import FoodItem from '../../models/FoodItem'
// import { CardapioItem, RestInfos } from '../../services/api'

export type CartItem = {
  nome?: string
  preco?: number
  foto?: string
  id?: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert(`Esta refeição ${action.payload.nome} já está no carrinho.`)
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

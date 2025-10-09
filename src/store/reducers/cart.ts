import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import FoodItem from '../../models/FoodItem'

type CartState = {
  items: FoodItem[]
}

const initialState: CartState = {
  items: [
    // {
    //   id: 1,
    //   name: 'Produto 1',
    //   price: 10.99,
    //   quantity: 2,
    //   description: 'Descrição do produto 1',
    //   image: 'https://via.placeholder.com/150',
    //   classification: 4.5
    // }
    // {
    //   id: 2,
    //   name: 'Produto 2',
    //   price: 15.99,
    //   quantity: 1,
    //   description: 'Descrição do produto 2',
    //   image: 'https://via.placeholder.com/150',
    //   classification: 3.8
    // },
    // {
    //   id: 3,
    //   name: 'Produto 3',
    //   price: 7.99,
    //   quantity: 3,
    //   description: 'Descrição do produto 3',
    //   image: 'https://via.placeholder.com/150',
    //   classification: 4.2
    // }
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<FoodItem>) => {
      state.items.push(action.payload)
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

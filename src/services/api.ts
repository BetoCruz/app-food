import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface CardapioItem {
  foto?: string
  preco?: number
  id?: number
  nome?: string
  descricao?: string
  porcao?: string
}

export type RestInfos = {
  id: number
  titulo?: string
  destacado?: boolean
  tipo?: string
  avaliacao?: number
  descricao?: string
  capa?: string
  cardapio?: CardapioItem[]
}

// https://api-ebac.vercel.app/api/efood/restaurantes

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurants: builder.query<RestInfos[], void>({
      query: () => 'restaurantes'
    }),
    getFeaturedCardapio: builder.query<RestInfos, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetFeaturedRestaurantsQuery, useGetFeaturedCardapioQuery } =
  api
export default api

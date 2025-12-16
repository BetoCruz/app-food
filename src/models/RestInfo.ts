export interface CardapioItem {
  id?: number
  foto?: string
  preco?: number
  nome?: string
  descricao?: string
  porcao?: string
}

export type RestInfos = [
  {
    id?: number
    titulo?: string
    destacado?: boolean
    tipo?: string
    avaliacao?: number
    descricao?: string
    capa?: string
    cardapio?: CardapioItem[]
  }
]

// export class RestInfos {
//   id: number
//   titulo: string
//   destacado: boolean
//   tipo: string
//   avaliacao: number
//   descricao: string
//   capa: string
//   cardapio: []

//   constructor(
//     id: number,
//     titulo: string,
//     destacado: boolean,
//     tipo: string,
//     avaliacao: number,
//     descricao: string,
//     capa: string,
//     cardapio: []
//   ) {
//     this.id = id
//     this.titulo = titulo
//     this.destacado = destacado
//     this.tipo = tipo
//     this.avaliacao = avaliacao
//     this.descricao = descricao
//     this.capa = capa
//     this.cardapio = cardapio
//   }
// }

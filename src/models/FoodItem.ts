class FoodItem {
  id: number
  name: string
  description?: string
  price?: number
  image?: string
  quantity?: number
  classification?: number

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    quantity: number,
    classification: number
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.image = image
    this.quantity = quantity
    this.classification = classification
  }

  //   getFormattedPrice(): string {
  //     return `$${this.price.toFixed(2)}`
  //   }
}
export default FoodItem

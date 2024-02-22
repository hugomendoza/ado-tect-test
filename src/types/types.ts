export interface PropsState {
  products: Product[]
  loading: boolean
  login: boolean
}

export interface Product {
  id: string
  name: string
  data: Data
}

export interface Data {
  color?: string
  generation?: string
  Capacity?: string
  Price?: string | number
  price?: string | number
}

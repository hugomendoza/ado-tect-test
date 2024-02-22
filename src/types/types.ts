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
  price?: number
  color?: string
  generation?: string
  Capacity?: string
  'Screen size'?: number
  Generation?: string
  Price?: string
}

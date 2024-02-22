import { useEffect, useState } from 'react'
import { Products } from '../../types/types'
import api from '../../api/api'

export const HomePage = (): JSX.Element => {

  const [products, setProducts] = useState<Products>()

  const getProductsFromApi = async (): Promise<void> => {
    try {
      const { data } = await api.get<Products>('objects')
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductsFromApi()
  }, [])

  return (
    <div>{JSON.stringify(products)}</div>
  )
}

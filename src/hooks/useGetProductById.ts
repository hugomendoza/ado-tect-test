import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from './useRedux'

import api from '../api/api'
import { Product } from '../types/types'
import { setLoading } from '../store'

export const useGetProductById = () => {
  const dispatch = useAppDispatch()
  const {id: idProduct} = useParams()

  const [product, setProduct] = useState<Product>({} as Product)

  const getProduct = async (id:string) => {
    dispatch(setLoading(true))
    try {
      const { data } = await api.get<Product>(`objects/${id}`)
      setProduct(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      dispatch(setLoading(false))
    }
  }

  return {
    idProduct,
    product,
    getProduct
  }
}
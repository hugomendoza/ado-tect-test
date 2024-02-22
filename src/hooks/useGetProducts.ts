import api from '../api/api'

import { setLoading, setProducts } from '../store'
import { useAppDispatch } from './useRedux'

import { Product } from '../types/types'

export const useGetProducts = () => {

  const dispatch = useAppDispatch();

  const getProductsFromApi = async () => {
    
    dispatch(setLoading(true));

    try {
      const { data } = await api.get<Product[]>('objects')
      dispatch(setProducts(data))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setLoading(false));
    }
    
  }

  return {
    getProductsFromApi
  }
}

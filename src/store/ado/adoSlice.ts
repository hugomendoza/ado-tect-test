import { createSlice } from '@reduxjs/toolkit'
import { Product, PropsState } from '../../types/types'

const initialState:PropsState = {
  products: [],
  loading: false,
  login: false
}

export const adoSlice = createSlice({
  name: 'ado',
  initialState,
  reducers: {
    setLogin: (state, { payload }: {payload: boolean}) => {
      state.login = payload
    },

    setLoading: (state, { payload }: {payload: boolean}) => {
      state.loading = payload
    },

    setProducts: (state, { payload }: {payload: Product[]}) => {
      state.products = payload
    }
  }
})

export const {
  setLoading,
  setLogin,
  setProducts
} = adoSlice.actions
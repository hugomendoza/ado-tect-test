import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, ProductPage } from '../pages'
import { useAppSelector } from '../hooks'

export const AppRouter = () => {

  const { login } = useAppSelector(state => state.ado)
  
  return (
    <Routes>
      
      {
        (!login)
        ? (
          <>
            <Route path='/auth/*' element={<LoginPage />} />
            <Route path='/*' element={<Navigate to='/auth/login' />} />
          </>
        ) : (
          <>
            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<Navigate to='/' />} />
            <Route path='/product/:id' element={<ProductPage />} />
          </>
        )
      }
    </Routes>
  )
}
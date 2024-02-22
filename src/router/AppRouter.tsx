import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'

export const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/auth/*' element={<LoginPage />} />
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}

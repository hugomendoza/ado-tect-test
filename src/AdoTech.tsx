import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router'

function AdoTech (): JSX.Element {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default AdoTech

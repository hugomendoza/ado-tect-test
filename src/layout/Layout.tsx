import { useAppSelector } from '../hooks'
import { Loader, Nav } from '../components'

interface Props {
  children: React.ReactNode
}

export const Layout = ({children}:Props) => {
  const { loading } = useAppSelector((state) => state.ado)

  if (loading) {
    return (
      <div className='container'>
        <Loader />
      </div>
    )
  }

  return (
    <>
      <Nav />
      {children}
    </>
  )
}

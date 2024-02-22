import { Nav } from "../components"

interface Props {
  children: React.ReactNode
}
export const Layout = ({children}:Props) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

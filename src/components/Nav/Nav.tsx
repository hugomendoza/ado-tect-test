import { useAppDispatch } from '../../hooks'
import { setLogin } from '../../store'

import { StyledNav } from './Nav.styles'
import { Button } from '../Button/Button'

export const Nav = () => {

  const dispatch =  useAppDispatch()

  return (
    <StyledNav>
      <Button
        type='button'
        value='Logout'
        onClick={() => dispatch(setLogin(false))}
      />
    </StyledNav>
  )
}

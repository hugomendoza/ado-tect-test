import { Button, Inputs } from '../../components'
import { Form, Main } from './LoginPage.styles'

export const LoginPage = (): JSX.Element => {
  return (
    <Main>
      <div className='container'>
        <Form>
          <Inputs
            label='Email'
            name='correo'
            type='email'
            placeholder='Ingresa tu correo'
            value=''
            error
            errorMessage='Email incorrecto'
          />
          <Inputs
            label='Password'
            name='password'
            type='password'
            placeholder='Ingresa tu contraseña'
            value=''
            error
            errorMessage='Email incorrecto'
          />
          <Button
            type='button'
            value='Ingresar'
          />
        </Form>
      </div>
    </Main>
  )
}

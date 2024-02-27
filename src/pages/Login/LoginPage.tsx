import { Button, Inputs } from '../../components'
import { useSubmitForm } from '../../hooks'
import { Form, Main } from './LoginPage.styles'

export const LoginPage = () => {
  const {
    email,
    password,
    onHandleInput,
    onValidateMail,
    onValidatePassword,
    onSubmit,
    emailError,
    passwordError
  } = useSubmitForm()

  return (
    <Main>
      <div className='container'>
        <Form onSubmit={onSubmit}>
          <Inputs
            label='Email'
            name='email'
            type='email'
            placeholder='Ingresa tu correo'
            value={email}
            onChange={onHandleInput}
            error={emailError}
            errorMessage='Email incorrecto'
            onBlur={onValidateMail}
          />
          <Inputs
            label='Password'
            name='password'
            type='password'
            placeholder='Ingresa tu contraseña'
            value={password}
            onChange={onHandleInput}
            error={passwordError}
            onBlur={onValidatePassword}
            errorMessage='Contraseña incorrecta'
          />
          <Button
            type='submit'
            value='Ingresar'
          />
        </Form>
      </div>
    </Main>
  )
}

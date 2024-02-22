import styled from 'styled-components'
import { bgLogin } from '../../assets/img'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgLogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100dvh;

  .container {
    width: min(90%, 500px);
  }
`

export const Form = styled.form`
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  backdrop-filter: blur(20px);
`

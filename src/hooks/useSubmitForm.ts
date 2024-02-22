import { useState } from "react";
import { useAppDispatch } from "./useRedux";
import { setLogin } from "../store";

export const useSubmitForm = () => {

  const dispatch = useAppDispatch();

  const [formsValues, setFormsValues] = useState({
    email: '',
    password: ''
  })

  const [formErrors, setFormErrors] = useState ({
    emailError: false,
    passwordError: false
  })

  const { email, password } = formsValues

  const onHandleInput = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setFormsValues({
      ...formsValues,
      [target.name]: target.value
    })
  }

  const onValidateMail = () => {
    if(email !== '') {
      setFormErrors({
        ...formErrors,
        emailError: false
      })
    }
  }

  const onValidatePassword = () => {
    if(password !== '') {
      setFormErrors({
        ...formErrors,
        passwordError: false
      })
    }
  }

  const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {

    e.preventDefault()

    let updatedErrors = {...formErrors}

    if(email === '' && password === '') {
      updatedErrors = {
        ...updatedErrors,
        emailError: true,
        passwordError: true
      }
    } else if(email === '') {
      updatedErrors = {
        ...updatedErrors,
        emailError: true
      }
    } else if(password === '') {
      updatedErrors = {
        ...updatedErrors,
        passwordError: true
      }
    }
    
    setFormErrors(updatedErrors)

    if (!updatedErrors.passwordError && !updatedErrors.emailError) {
      dispatch(setLogin(true));
    }
  }

  return {
    ...formsValues,
    ...formErrors,
    onHandleInput,
    onSubmit,
    onValidateMail,
    onValidatePassword,
  }
}


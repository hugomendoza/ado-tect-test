import {
  ErrorMessage,
  Fieldset,
  Input,
  Label
} from './Inputs.styles'

interface Props {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  icon?: JSX.Element
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: boolean
  errorMessage?: string
}

export const Inputs = (props: Props): JSX.Element => {
  const {
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    error,
    errorMessage,
    icon
  } = props

  return (
    <Fieldset>
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon}
      {error === true && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Fieldset>
  )
}

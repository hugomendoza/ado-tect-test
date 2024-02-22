import styled from 'styled-components'

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0 0 0.85rem;
  border: 0;
`

export const Label = styled.label`
  color: var(--white);
  font-size: 0.85rem;
`

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid var(--white);
  background-color: transparent;
  color: var(--white);
  appearance: none;

  &::placeholder {
    color: var(--white);
  }
`

export const ErrorMessage = styled.p`
  color: var(--red);
  font-size: 0.85rem;
`

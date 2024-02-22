import styled from 'styled-components'

export const StyledBanner = styled.figure`
  width: 100%;
  height: 20rem;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  font-weight: 600;
`

export const StyledDescription = styled.p`
  margin-bottom: 1rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--gray);
`

export const WrapperLabels = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const StyledLabel = styled.span`
  background-color: var(--cyan);
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  color: var(--white);
  font-weight: 300;
  font-size: 0.75rem;
`
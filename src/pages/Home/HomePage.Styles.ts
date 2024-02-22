import styled from "styled-components";

export const Grid = styled.ul`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (width < 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (width < 769px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (width < 576px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
import styled from "styled-components";

export const Grid = styled.ul`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
`
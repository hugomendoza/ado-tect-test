import styled from "styled-components";

export const StyledCard = styled.li`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  list-style-type: none;
`

export const StyledFigureCard = styled.figure`
  height: 12rem;
  display: block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.75rem 0.75rem 0 0;
  }
`

export const StyledDataCard = styled.div`
  padding: 1.5rem;
`

export const StyledTitleCard = styled.h2`
  font-size: 1.25rem;
  font-weight: 300;
`

export const StyledDescription = styled.p`
  font-size: 0.85rem;
  color: var(--gray);
  margin-top: 0.5rem;
  line-height: 1.5;
`
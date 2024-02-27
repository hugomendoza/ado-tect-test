import {
  StyledCard,
  StyledDataCard,
  StyledFigureCard,
  StyledDescription,
  StyledTitleCard
} from './Card.styles'

import { iMacPhoto } from '../../assets/img'

import { Product } from '../../types/types'

export const Card = (props:Product) => {
  const { id, name, data: { Price } } = props

  return (
    <StyledCard>
      <StyledFigureCard>
        <img
          src={iMacPhoto}
          alt={name}
        />
      </StyledFigureCard>
      <StyledDataCard>
        <StyledTitleCard to={`/product/${id}`}>
          <h2>{name || '-'}</h2>
        </StyledTitleCard>
        <StyledDescription>
          {`${Price ? `$${Price}` : '-'}`}
        </StyledDescription>
      </StyledDataCard>
    </StyledCard>
  )
}

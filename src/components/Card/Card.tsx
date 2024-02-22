import { iMacPhoto } from '../../assets/img'
import {
  StyledCard,
  StyledDataCard,
  StyledFigureCard,
  StyledDescription,
  StyledTitleCard
} from './Card.styles'

export const Card = () => {

  return (
    <StyledCard>
      <StyledFigureCard>
        <img src={iMacPhoto} alt="" />
      </StyledFigureCard>
      <StyledDataCard>
        <StyledTitleCard>
          Card title
        </StyledTitleCard>
        <StyledDescription>
          $150
        </StyledDescription>
      </StyledDataCard>
    </StyledCard>
  )
}

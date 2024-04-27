import styled from "styled-components";
import heroBackgroundImg from "../../../../assets/hero-gradient.svg"
import { rgba } from "polished";
import { TitleText } from "../../../../components/typography";

export const HeroContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({ theme }) => `url(${heroBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
      background-size: cover;

      display: flex;
      align-items: center;
      justify-content: center;

`;

export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

`;

export const HeroTitle = styled(TitleText)` 
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
row-gap: 1.25rem;
margin-top: 4.125rem;
`;

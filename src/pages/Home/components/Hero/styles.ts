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

      @media (max-width: 1024px) {
      padding: 0 2rem;
      margin-top: 2rem;
  }

      @media (max-width: 700px) {
        margin-top: 4rem;
      }

`;

export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    > div {
      flex: 1;
    }

    > div.imageContainer {
      flex: 1;
    }

    @media (max-width: 768px) {
          gap: 1rem;
          margin-top: 30rem;
          flex-direction: column-reverse;
          > img {
          width: 100%;
      }
    }

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

@media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 4rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    font-size: 1.1rem;
  }
`;


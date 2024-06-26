import styled from "styled-components";

export const OurProductsContainer = styled.section`
    width: 100%;
    margin-top: 2rem;

    @media (max-width: 1024px) {
        padding: 0 2rem;
    }
    @media (max-width: 768px) {
        margin-top: 32rem;
    
  }
`;

export const ProductCardContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
`;

export const ProductList = styled.div`
    width: 100%;
    display: grid;grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;

    @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`
import styled from "styled-components";


export const HeaderContainer = styled.header`
   height: 6.5rem;
   background: ${({ theme }) => theme.colors["base-background"]};
   display: flex;
   align-items: center;
   justify-content: center;

   > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   }
`;
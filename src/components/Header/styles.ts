import styled from "styled-components";


export const HeaderContainer = styled.header`

   width: 100%;
   height: 6.5rem;
   background: ${({ theme }) => theme.colors["base-background"]};
   display: flex;
   align-items: center;
   justify-content: center;
   position: sticky;
   top: 0;
   left: 0;
   z-index: 9999;
  
   > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   
 
`;
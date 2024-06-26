import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
    .container {
        width: 100%;
        max-width: 70rem;
        margin-right: auto;
        margin-left: auto;
    }
`;

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

interface HeaderButtonProps {
    variant: "purple" | "yellow"
}
   


export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: ${({ theme}) => theme.textSizes["text-regular-s"]};

    ${({ variant, theme }) => css`
        background: ${theme.colors[`brand-${variant}-light`]};
        color: ${theme.colors[`brand-${variant}-dark`]};
    `}
    
    ${({ variant, theme }) =>
        variant=== "purple" && css`
        svg {
            color: ${theme.colors[`brand-purple`]};
    }
  `}

`;


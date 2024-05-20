import styled from "styled-components"

export const CompleteOrderContainer = styled.form`
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 0 2rem;
    margin-bottom: 6rem;

    @media (max-width: 1024px) {
        flex-direction: column;
     //   margin-bottom: 4rem;
    }
    
`;

export const SectionBaseStyle = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`;
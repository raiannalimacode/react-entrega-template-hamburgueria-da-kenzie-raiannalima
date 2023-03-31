import styled from 'styled-components'

export const StylizedCard = styled.li`
    width: 18.75rem;
    height: 21.625rem;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-grey-03);
    border-radius: var(--border-radius-02);

    .img-container {
        height: 9.375rem;
        background-color: var(--color-grey-04);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
        padding: 1.3125rem;
    }

    @media (max-width: 500px) {
        min-width: 12.75rem;
        min-height: 23.625rem;
    }
`
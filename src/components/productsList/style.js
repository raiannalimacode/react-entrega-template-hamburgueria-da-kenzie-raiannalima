import styled from 'styled-components'

export const StylizedProductsList = styled.div`
    width: 70%;
    height: 45.9375rem;
    overflow: hidden;
    margin: 1.25rem 0rem;

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
        overflow-x: auto;
    }

    @media (max-width: 500px) {
        width: 100%;
        height: 100%;
        margin-top: 6.125rem;

        ul {
            flex-wrap: nowrap;
            padding: 1rem;
        }
    }
` 
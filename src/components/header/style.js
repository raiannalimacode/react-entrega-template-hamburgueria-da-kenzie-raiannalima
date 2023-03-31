import styled from 'styled-components'

export const StylizedHeader = styled.header`
    width: 100%;
    height: 5rem;
    background-color: var(--color-grey-04);

    .header-container {
        width: 1150px; 
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .search-container {
        position: relative;
    }

    form {
        width: 18.5625rem;
        height: 3.75rem;
        display: flex;
        align-items: center;
        background-color: var(--color-white);
        border: 2px solid var(--color-grey-03);
        border-radius: var(--border-radius-01);
        padding-left: 0.9375rem;
        color: var(--color-grey-03);
    }

    input {
        border: none;
        color: var(--color-grey-03);
        padding: 1.2rem 0px 18px 0.1rem;
    }

    button {
        position: absolute;
        right: 4%;
        top: 15.5%;
    }

    @media (max-width: 500px) {
        .header-container {
            justify-content: center;
            width: 100%;
        }

        .search-container {
            width: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
            top: 79px;
            background-color: var(--color-grey-04);
            padding: 1rem;
        }

        input {
            width: 17.5625rem;
        }

        button {
            width: 6.6875rem;
            right: 14%;
            top: 28.5%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`
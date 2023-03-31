import styled from 'styled-components'

export const StylizedCart = styled.div`
    width: 30%;
    height: 33.125rem;
    background-color: var(--color-grey-04);
    margin: 1.25rem 0rem;
    border-radius: var(--border-radius-02);
    position: relative;

    .cart-title {
        height: 4.0625rem;
        background-color: var(--color-primary-01);
        border-radius: 5px 5px 0 0;
        display: flex;
        align-items: center;
        padding-left: 1.25rem; 
    }

    ul {
        height: calc(100% - 13.1rem);
        padding: 1.25rem 0.625rem 0 0.625rem;
        overflow: scroll;
    }

    li {
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.25rem;
    }

    .cart-data {
        display: flex;
    }

    .cart-image {
        width: 5rem;
        height: 5rem;
        background-color: var(--color-grey-03);
        border-radius: var(--border-radius-02);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.625rem;
    }

    .cart-image img {
        width: 70px;
    }

    .cart-name {
        margin-top: 0.625rem;
    }

    .btn-remove {
        color: var(--color-grey-05);
        font-size: var(--font-size-01);
        font-weight: var(--font-weight-04);
        margin-top: 0.625rem;
    }

    .cart-total {
        width: 100%;
        position: absolute;
        padding: 1.25rem 0.625rem 1.25rem 0.625rem;
        bottom: 0px;
        border-top: 2px solid var(--color-grey-03);
    }

    .cart-total > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.375rem;
    }

    .btn-remove-all {
        width: 100%;
        height: 3.75rem;
        background-color: var(--color-grey-03);
        color: var(--color-grey-02);
        font-size: var(--font-size-03);
        font-weight: var(--font-weight-02);
        border-radius: var(--border-radius-01);
    }

    .cart-empty-bag {
        height: calc(100% - 63px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 500px) {
        width: calc(100% - 40px);
        margin: 20px;
        height: 12rem;

        .cart-empty-bag {
            height: 8rem;
        }
    }
`
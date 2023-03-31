import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    ul, ol {
        list-style: none;
    }

    .container {
        margin: 0 auto;
    }

    :root {
        --color-primary-01: #27AE60;
        --color-primary-02: #93D7AF;
        --color-secondary-01: #EB5757;
        --color-grey-01: #333333;
        --color-grey-02: #828282;
        --color-grey-03: #E0E0E0;
        --color-grey-04: #F5F5F5;
        --color-grey-05: #BDBDBD;
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-sucess: #168821;
        --color-information: #155BCB;
        --color-white: #FFFFFF;

        --font-size-01: 0.75rem; /* 12px */
        --font-size-02: 0.875rem; /* 14px */
        --font-size-03: 1rem;
        --font-size-04: 1.125rem; /* 18px */
        --font-size-05: 1.375rem; /* 22px */ 
        --font-size-06: 1.625rem; /* 26px */

        --font-weight-01: 400;
        --font-weight-02: 600;
        --font-weight-03: 700;
        --font-weight-04: 500;

        --line-height-01: 150%;

        --border-radius-01: 8px;
        --border-radius-02: 5px;
    }

    .btn-01 {
        width: 8.125rem;
        height: 3.75rem;
        background-color: var(--color-primary-01);
        padding: 0 1.25rem;
        color: var(--color-white);
        font-size: var(--font-size-03);
        font-weight: var(--font-weight-02);
        border-radius: var(--border-radius-01);
    }

    .btn-01:hover {
        background-color: var(--color-primary-02);
    }

    .btn-02 {
        width: 8.125rem;
        height: 3.75rem;
        background-color: var(--color-grey-03);
        padding: 0 1.25rem;
        color: var(--color-grey-02);
        font-size: var(--font-size-03);
        font-weight: var(--font-weight-02);
        border-radius: var(--border-radius-01);
    }

    .btn-02:hover {
        background-color: var(--color-grey-02);
        color: var(--color-grey-03);
    }

    .btn-03 {
        width: 8.125rem;
        height: 2.5rem;
        background-color: var(--color-primary-01);
        padding: 0 1.25rem;
        color: var(--color-white);
        font-size: var(--font-size-03);
        font-weight: var(--font-weight-02);
        border-radius: var(--border-radius-01);
    }

    .btn-03:hover {
        background-color: var(--color-primary-02);
    }

    .btn-04 {
        width: 8.125rem;
        height: 2.5rem;
        background-color: var(--color-grey-03);
        padding: 0 1.25rem;
        color: var(--color-grey-02);
        font-size: var(--font-size-03);
        font-weight: var(--font-weight-02);
        border-radius: var(--border-radius-01);
    }

    .btn-04:hover {
        background-color: var(--color-grey-02);
        color: var(--color-grey-03);
    }

    .title-01 {
        color: var(--color-grey-01);
        font-size: var(--font-size-04);
        font-weight: var(--font-weight-03);
        line-height: var(--line-height-01);
    }

    .title-02 {
        color: var(--color-white);
        font-size: var(--font-size-04);
        font-weight: var(--font-weight-03);
        line-height: var(--line-height-01);
    }

    .title-03 {
        color: var(--color-grey-01);
        font-size: var(--font-size-02);
        font-weight: var(--font-weight-03);
        line-height: var(--line-height-01);
    }

    .title-04 {
        color: var(--color-grey-01);
        font-size: var(--font-size-02);
        font-weight: var(--font-weight-02);
        line-height: var(--line-height-01);
    }

    .text-01 {
        color: var(--color-grey-02);
        font-size: var(--font-size-01);
        font-weight: var(--font-weight-01);
        line-height: var(--line-height-01);
    }

    .text-02 {
        color: var(--color-primary-01);
        font-size: var(--font-size-02);
        font-weight: var(--font-weight-02);
        line-height: var(--line-height-01);
    }

    .text-03 {
        color: var(--color-grey-02);
        font-size: var(--font-size-02);
        font-weight: var(--font-weight-02);
        line-height: var(--line-height-01);
    }

    .text-04 {
        color: var(--color-grey-02);
        font-size: var(--font-size-02);
        font-weight: var(--font-weight-01);
        line-height: var(--line-height-01);
    }
`
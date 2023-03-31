import styled from 'styled-components'

export const StylizedContainerMain = styled.div`
    display: flex;
    width: 1150px; 
    margin: 0 auto;

    @media (max-width: 500px) {
        width: 100%;
        flex-direction: column;
    }
`
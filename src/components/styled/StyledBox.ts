import styled from 'styled-components'

export const StyledBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        justify-content: start;
        max-width: 100%;
    }

`
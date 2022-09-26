import styled from 'styled-components'

export const Container = styled.div`
    position: relative;

    @media screen and (min-width: 320px) {
        max-width: 95%;
        margin: 0 auto;
    }

    @media screen and (min-width: 960px) {
        max-width: 960px;
        margin: 0 auto;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1330px;
        margin: 0 auto;
    }

    @media screen and (min-width: 1480px) {
        max-width: 1380px;
        margin: 0 auto;
    }
`
import styled from 'styled-components'

export const StyledShare = styled.section`
    display: flex;
    align-items: center;
    background: #f2f2f2;
    height: 632px;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: max-content;
        padding-inline: 32px;

        .share__link-2 {
            display: block;
        }

        img {
            width: 304px;
        }
    }

    .share__left__column {
        margin-right: 60px;

        @media screen and (max-width: 1000px) {
            margin-right: 0px;
        }

        h2 {
            margin-bottom: 40px;
            width: 240px;

            @media screen and (max-width: 1000px) {
                text-align: center;
                margin: 0 auto;
                width: 100%;
                margin-top: 20px;
            }
        }

        span:has(span) {
            display: block;
            margin-bottom: 40px;
            width: 450px;

            @media screen and (max-width: 1000px) {
                width: 100%;
                text-align: center;
                margin-top: 20px;
            }
        }

        .share__link {
            color: #5e20a4;
		    text-decoration: underline;
		    text-decoration-color: #5e20a4;

            @media screen and (max-width: 1000px) {
                text-align: center;
            }
        }

        
    }
`
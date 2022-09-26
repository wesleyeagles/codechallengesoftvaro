import styled from 'styled-components'

export const StyledHero = styled.section`
    display: flex;
    align-items: center;
    background: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7), url(/images/hero-image.png);
    background-position: center;
    background-blend-mode: overlay;
    width: 100%;
    height: 616px;

    .hero__left__column {
        width: 50%;
        margin-bottom: 60px;

        @media screen and (max-width: 1000px) {
            width: 100%;
        }
        

        h1 {
            color: #FFF;
            margin-bottom: 24px;

            @media screen and (max-width: 1000px) {
                text-align: center;
                width: 272px;
                margin: 0 auto;
                font-size: 30px;
                line-height: 1.2;
            }
        }

        h2 {
            color: #FFF;
            font-size: 18px;
		    line-height: 24px;

            @media screen and (max-width: 1000px) {
                text-align: center;
                width: 270px;
                margin: 0 auto;
                font-size: 16px;
                line-height: 1.8;
                margin-top: 16px;
            }
        }
    }

    .hero__right__column {
        width: 380px;

        @media screen and (max-width: 1000px) {
            display: none;
        }
    }

`
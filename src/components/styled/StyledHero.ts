import styled from 'styled-components'

export const StyledHero = styled.section`
    display: flex;
    align-items: center;
    background: linear-gradient(175deg, #5912ac, #7e49c3, #c86dd7), url(/images/hero-image.png);
    background-blend-mode: overlay;
    width: 100%;
    height: 616px;

    .hero__left__column {
        width: 50%;
        margin-bottom: 60px;
        

        h1 {
            color: #FFF;
            margin-bottom: 24px;
        }

        h2 {
            color: #FFF;
            font-size: 18px;
		    line-height: 24px;
        }
    }

    .hero__left__right {
        width: 480px;
    }

`
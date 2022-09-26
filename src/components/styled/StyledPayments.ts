import styled from 'styled-components'

export const StyledPayments = styled.section`
    height: 528px;
	background: #f2f2f2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding-inline: 20px;
        height: max-content;
        padding-top: 100px;

        img {
            width: 312px;
        }
    }

    .payments__wrapper {

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-inline: 150px;

        @media screen and (max-width: 768px) {
            padding-inline: 0px;
        }
    }

    .payments__right__column {
        width: 43%;

        @media screen and (max-width: 1000px) {
            width: 100%;
        }

        h2, p {
            margin-bottom: 40px;

            @media screen and (max-width: 1000px) {
                text-align: center;
                width: 92%;
                margin: 0 auto;
                margin-block: 40px;
            }
        }

        .payments__link {
            color: #5e20a4;
		    text-decoration: underline;
		    text-decoration-color: #5e20a4;

            @media screen and (max-width: 1000px) {
                text-align: center;
                display: block;
            }
        } 
    }

    .divider {
		width: 784px;
        margin: 0 auto;
        margin-block: 60px;
		border-top: solid 2px #dfdfdf;

        @media screen and (max-width: 1000px) {
            width: 320px;
        }
	}
`
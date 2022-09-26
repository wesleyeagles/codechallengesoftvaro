import styled from 'styled-components'

export const StyledFramework = styled.section`
    height: 380px;
	background: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        height: max-content;
    }

    h2, p, .framework__link {
        text-align: center;
        display: block;
    }

    p {
        width: 770px;
        margin: 0 auto;
        margin-block: 40px;

        @media screen and (max-width: 1000px) {

            width: 92%;
        }
    }

    .framework__link {
        color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;

        @media screen and (max-width: 1000px) {
            width: 92%;
            margin: 0 auto;
        }
    }
`
import styled from 'styled-components'

export const StyledFramework = styled.section`
    height: 380px;
	background: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2, p, .framework__link {
        text-align: center;
        display: block;
    }

    p {
        width: 770px;
        margin: 0 auto;
        margin-block: 40px;
    }

    .framework__link {
        color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
    }
`
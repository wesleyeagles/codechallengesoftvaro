import styled from 'styled-components'

export const StyledPayments = styled.section`
    height: 528px;
	background: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 160px;

    .divider {
		width: 784px;
		border-top: solid 2px #dfdfdf;
		align-self: center;
        margin-top: 100px;
	}


    .payments__right__column {
        width: 43%;

        h2, p {
            margin-bottom: 40px;
        }

        .payments__link {
            color: #5e20a4;
		    text-decoration: underline;
		    text-decoration-color: #5e20a4;
        }
    }
`
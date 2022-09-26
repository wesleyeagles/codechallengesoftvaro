import styled from 'styled-components'

export const StyledDiary = styled.section`
    height: 508px;
	background: #f2f2f2;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
		width: 216px;
		height: 96px;
	}

    h2, p {
        text-align: center;
    }

    h2 {

        margin-block: 40px;
    }

    p {
        width: 760px;
        margin: 0 auto;
    }

    .divider {
		width: 784px;
        margin: 0 auto;
        margin-block: 60px;
		border-top: solid 2px #dfdfdf;
	}
`
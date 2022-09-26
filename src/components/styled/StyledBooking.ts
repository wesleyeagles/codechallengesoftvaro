import styled from 'styled-components'

export const StyledBooking = styled.section`
    height: 112px;
	display: flex;
	justify-content: center;
	align-items: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: 220px;
    }

    img {
        width: 56px;
		height: 56px;
		margin-right: 32px;
    
        @media screen and (max-width: 1000px) {
            margin-right: 0;
        }
    }

    .booking__action__link {
        color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
        margin-right: 12px;

        @media screen and (max-width: 1000px) {
            margin-block: 12px;
            width: 200px;
            text-align: center;
            margin-right: 0;
        }
    }
`
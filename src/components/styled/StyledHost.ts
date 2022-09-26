import styled from 'styled-components'

export const StyledHost = styled.section`
    height: 380px;
	background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: 340px;
    }

    h2, p {
        text-align: center;
        margin-bottom: 20px;
    }

    .host__btn__link {

        text-decoration: none;
    }

    .host__btn{
        width: 304px;
		height: 68px;
        display: flex;
        margin-bottom: 30px;
        align-items: center;
        justify-content: center;
        background-color: #5e20a4;
        color: #ffffff;
        border-radius: 4px;
		border: none;
        cursor: pointer;
    }

    .host__btn span {
        color: #ffffff;
		margin-left: 20px;
        
    }

    .host__btn__maintext {
        font-size: 16px;
		line-height: 28px;
		font-weight: 400;
		justify-self: start;
		align-self: end;
        
    }

    .host__btn_subtext {
        font-size: 12px;
		line-height: 16px;
		font-weight: 400;
        text-align: start;
        display: block;
    }

    .host__link {
        color: #5e20a4;
		text-decoration: underline;
		text-decoration-color: #5e20a4;
    }

`
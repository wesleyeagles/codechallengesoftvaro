import styled from 'styled-components'

export const StyledShare = styled.section`
    display: flex;
    align-items: center;
    background: #f2f2f2;
    height: 632px;

    .share__left__column {
        margin-right: 60px;

        h2 {
            margin-bottom: 40px;
            width: 240px;
        }

        span:has(span) {
            display: block;
            margin-bottom: 40px;
            width: 450px;
        }

        .share__link {
            color: #5e20a4;
		    text-decoration: underline;
		    text-decoration-color: #5e20a4;
        }

        
    }
`
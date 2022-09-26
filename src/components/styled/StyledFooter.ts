import styled from 'styled-components'

export const StyledFooter = styled.footer`


    .footer__left__column {
        width: 20%;
    }

    .footer__center_column {

        width: 60%;
        display: flex;
        justify-content: center;
    }

    .footer__navigation {
        display: flex;

        .footer__link {
            margin-inline: 16px;
            text-decoration: none;

            h5 {
		        color: #3d3d3d;
            }
        }
    }

    .footer__social-media {
        display: flex;
        justify-content: flex-end;
        width: 20%;

        .footer__social-media__single {
            margin-inline: 6px;
        }
    }

    .footer__copyright {
        text-align: center;
        margin-block: 32px;
		color: #3d3d3d;
		font-size: 12px;
    }

    
`
import styled from 'styled-components'

export const StyledFooter = styled.footer`

    .footer__box {

        display: flex;
        justify-content: space-between;
        padding-inline: 60px;

        @media screen and (max-width: 1000px) {
            flex-direction: column;
            padding-inline: 0;
            align-items: center;
        }
    }


    .footer__left__column {
        width: 20%;

        @media screen and (max-width: 1000px) {
            width: 100%;
            display: flex;
            justify-content: center;
            
        }
    }

    .footer__center_column {

        width: 60%;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 1000px) {
            width: 80%;
            margin: 0 auto;
            
        }

        
    }

    .footer__navigation {
        display: flex;
        

        @media screen and (max-width: 1000px) {
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 32px;
            
        }

        .footer__link {
            margin-inline: 16px;
            text-decoration: none;

            @media screen and (max-width: 1000px) {
                margin-block: 8px;
            }

            h5 {
		        color: #3d3d3d;
            }
        }
    }

    .footer__social-media {
        display: flex;
        justify-content: flex-end;
        width: 20%;

        @media screen and (max-width: 1000px) {
            width: 100%;
            justify-content: center;
            margin-top: 12px;
        }

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
import styled from 'styled-components'
import { useAuth } from '../../hooks/useAuth'


export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 99;

    .header__left__column {
        display: flex;
        align-items: center;
        flex: 1;

        .badge-logo {
            margin-right: 24px;
        }
    }

    .navigation {
        display: flex;

        @media screen and (max-width: 1000px) {
            display: none;
        }

    }

    .navigation__link {
            margin-inline: 16px;
            text-decoration: none;
            height: max-content;
            color: #FFF;

            @media screen and (max-width: 1000px) {
                display: none;
            }
    }

    .header__right__column {
        display: flex;
        align-items: center;
        margin-top: 12px;

        .header__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            height: 44px;
		    width: 234px;
		    border: none;
		    background-color: #00a870;
		    color: #ffffff;
		    text-decoration: none;
            margin-right: 20px;
		    cursor: pointer;
            
        }

        .header__google__loggedIn {
            display: flex;

            .header__user__photo {
                width: 45px;
                height: 45px;
                border-radius: 100%;
                overflow: hidden;
                margin-inline: 16px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    
`
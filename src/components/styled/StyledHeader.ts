import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 99;
    max-width: 1280px;

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

    }

    .navigation__link {
            margin-inline: 16px;
            text-decoration: none;
            height: max-content;
            color: #FFF;
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
		    cursor: pointer;
        }
    }

    
`
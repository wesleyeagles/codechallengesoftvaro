import styled from 'styled-components'

export const StyledNewsItem = styled.div`


    width: 380px;
    border-radius: 6px;
    box-shadow: 0px 4px 15px 0px #00000030;
    overflow: hidden;
    margin-inline: 5px;

    @media screen and (max-width: 768px) {
        flex: none;
        width: 340px;
    }

    .news__image {
        width: 100%;
        height: 180px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .news__title {
        margin-top: 20px;
        padding-inline: 12px;

        span {
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 17px;
            font-weight: 600;
        }
    }

    .news__description {
        margin-block: 20px;

        p {
            text-overflow: ellipsis;
            padding-inline: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 14px;
        }
    }

    .news__url {
        padding-inline: 12px;
        margin-bottom: 20px;
    }
`
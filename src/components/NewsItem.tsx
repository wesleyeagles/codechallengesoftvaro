import { StyledNewsItem } from "./styled/StyledNewItems";
import { iNewsItem } from '../interfaces/index'

export function NewsItem({title, description, image, url}: iNewsItem) {
    return (
        <StyledNewsItem>
            <div className="news__image">
                <img src={image} alt="" />
            </div>

            <div className="news__title">
                <span role='news-title'>
                    {title}
                </span>
            </div>

            <div className="news__description">
                <p>
                    {description}
                </p>
            </div>

            <div className="news__url">
                <a href={url} target='_blank'>
                    See more
                </a>
            </div>
        </StyledNewsItem>
    )
}
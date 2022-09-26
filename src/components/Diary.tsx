import { StyledDiary } from "./styled/StyledDiary";
import { useFetchApi } from '../hooks/useFetchApi'
import { NewsItem } from "./NewsItem";
import { Container } from "./styled/Container";
import { iNewsItemArray } from "../interfaces";

export function Diary() {

    const { news } = useFetchApi()

    return (
        <Container>
        <StyledDiary>
            {news.map((item: iNewsItemArray) => (
                <NewsItem
                key={item.title}
                image={item.urlToImage}
                title={item.title}
                description={item.description}
                url={item.url}
                
                />
            ))}
        </StyledDiary>
        </Container>
    )
}
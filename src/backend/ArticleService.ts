import Articles from '../assets/Articles.json';
import { Article } from '../type.d';

export { GetArticles }

const GetArticles = async() => {
    let resultArticles: Article[] = [];

    for (const article of Articles) {
        let result = await fetch(process.env.PUBLIC_URL + article.body);
        let html = await result.text();
        resultArticles.push({
            id: article.id,
            headline: article.headline,
            snippet: article.snippet,
            body: html
        })
    }

    return resultArticles;
}
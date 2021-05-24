import Articles from '../assets/Articles.json';

export async function GetArticles() {

    for(const article of Articles){
        let result = await fetch(process.env.PUBLIC_URL + article.body);
        let html = await result.text();
        article.body = html;
    }

    return Articles;
}
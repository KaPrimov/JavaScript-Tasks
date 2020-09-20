import { Article } from '../models/article.models';
import { data } from './seed';

export class ArticleData {
    getData() : Article[] {
        let articles : Article[] = [];

        for (let i = 0; i < data.length; i++) {
            const dataObject = data[i];
            articles[i] = dataObject;
            // articles[i] = new Article(dataObject.title, dataObject.description, dataObject.author, dataObject.imageUrl);
        }

        return articles;
    }
}
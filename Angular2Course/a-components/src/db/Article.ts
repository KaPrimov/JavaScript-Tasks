export default class Article {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string

  constructor(id: number, title: string, description: string, author: string, imageUrl: string) {
    this.id = id; 
    this.title = title;
    this.description = description;
    this.author = author;
    this.imageUrl = imageUrl;
  }
}
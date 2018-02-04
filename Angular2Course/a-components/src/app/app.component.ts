import { Component, OnInit } from '@angular/core';
import articles from '../db/Data';
import Article from '../db/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles: Article[] = articles;
  selectedArticle: Article;

  ngOnInit(): void {
    this.articles = articles;
  }
  
  showDetails(targetId: number): void {
    this.selectedArticle = this.articles.find(a => a.id === targetId);
  }

  deleteTargetArticle(tagetId: number): void {
    this.articles = this.articles.filter(a => a.id != tagetId);
    if (this.selectedArticle.id === tagetId) {
      this.selectedArticle = null;
    }
  }
}

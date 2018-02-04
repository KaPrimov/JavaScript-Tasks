import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import Article from '../../db/Article';
import { fail } from 'assert';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {
  
  @Input() article: Article;
  @Output() deleteArticleEmitter: EventEmitter<any> = new EventEmitter();
  counter: number = 0;
  limit: number = 0;
  hideReadMore: boolean = false;
  showImage: boolean = true;

  constructor() { }

  ngOnInit() {
    if(this.article) {
      this.limit = Math.floor(this.article.description.length / 250);
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.counter = 0;
    this.showImage = false;
    this.hideReadMore = false;
  }

  trunc(text): string {
    return text.slice(0, this.counter * 250);
  }

  readMore(): void {
    if (this.limit === this.counter) {
      this.hideReadMore = true;
    } else {
      this.hideReadMore = false;
    }
    this.counter = this.counter + 1;
  }

  hideText(): void {
    this.hideReadMore = false;
    this.counter = 0;
  }

  showImageFunc(): void {
    this.showImage = true;
  }

  hideImage(): void {
    this.showImage = false;
  }

  deleteArticle(targetId: number) {
    this.deleteArticleEmitter.emit(targetId);
  }
}

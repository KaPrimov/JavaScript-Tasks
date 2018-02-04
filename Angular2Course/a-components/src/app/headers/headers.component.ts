import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Article from '../../db/Article';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  @Input() incommingArticle: Article;
  @Output() selection: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendData(clickedId) {
    this.selection.emit(clickedId);
  }

}

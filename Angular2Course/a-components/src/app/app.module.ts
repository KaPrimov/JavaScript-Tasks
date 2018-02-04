import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HeadersComponent } from './headers/headers.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeadersComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

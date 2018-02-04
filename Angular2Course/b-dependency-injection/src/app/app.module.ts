import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main/main.component';
import { AuthComponent } from './components/auth/auth.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor } from './interceptors/auth.interceptro';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { TableElementComponent } from './components/table-element/table-element.component';
import { DetailsViewComponent } from './components/details-view/details-view.component'
import { DetailsService } from './services/details/details.service'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    PokeTableComponent,
    TableElementComponent,
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

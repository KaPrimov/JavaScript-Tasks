import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MustMatchDirective } from './directives/must-match.directive';
import { UserNameDirective } from './directives/user-name.directive';
import { EmailDirective } from './directives/email.directive';
import { PhoneNumberDirective } from './directives/phone-number.directive';
import { PasswordDirective } from './directives/password.directive';
import { UrlValidatorDirective } from './directives/url-validator.directive';
import { RegisterFormReactiveComponent } from './register-form-reactive/register-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    MustMatchDirective,
    UserNameDirective,
    EmailDirective,
    PhoneNumberDirective,
    PasswordDirective,
    UrlValidatorDirective,
    RegisterFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

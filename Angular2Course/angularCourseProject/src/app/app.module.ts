import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './start/app.component';

import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';

import { AdminModule }  from './admin/admin.module';
import { ShopComponent } from './shop/shop.component';

import { ShoppingCartService } from './shared/shopping-cart.service';
import { CartComponent } from './cart/cart.component';
import { UserService } from './admin/adminShared/user.service';
import { BasicGuard } from './shared/basic-auth.guard';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ErrorComponent,
        ShopComponent,
        CartComponent
    ],
    providers: [
        ShoppingCartService,
        UserService,
        BasicGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

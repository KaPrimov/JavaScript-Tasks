import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent }  from './adminMenu/admin-menu.component';
import { LoginComponent }    from './login/login.component';
import { SignUpComponent }    from './signUp/sign-up.component';

import { UserService } from './adminShared/user.service';
import { BlogAdminService } from './adminShared/blog-admin.service';

import { BlogAdminComponent }    from './blogAdmin/blog-admin.component';
import { BlogAddComponent }    from './blogAdd/blog-add.component';

import { TruncatePipe } from './adminShared/trunc.pipe';
import { ReactiveFormsModule } from '@angular/forms'

import { ProductAdminService } from './adminShared/product-admin.service';
import { ProductAdminComponent }    from './productAdmin/product-admin.component';
import { ProductAddComponent }    from './productAdd/product-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const AdminRoutes: Routes = [
    { 
        path: 'admin',  
        component: AdminComponent, 
        children: [
            { path: 'product-admin', component: ProductAdminComponent, canActivate: [UserService] },
            { path: 'blog-admin', component: BlogAdminComponent, canActivate: [UserService] },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: '', component: AdminMenuComponent, canActivate: [UserService] }
        ]
    },
];
@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [
        RouterModule,
        TruncatePipe
    ],
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent,
        SignUpComponent,
        BlogAdminComponent,
        BlogAddComponent,
        TruncatePipe,
        ProductAdminComponent,
        ProductAddComponent
    ],
    providers: [
        UserService,
        BlogAdminService,
        ProductAdminService
    ]
})
export class AdminModule {}


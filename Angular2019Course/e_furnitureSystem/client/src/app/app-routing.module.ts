import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FurnitureAllComponent } from './furniture/furniture-all/furniture-all.component';
import { CreateFurnitureComponent } from './furniture/create-furniture/create-furniture.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';
import { FurnitureUserComponent } from './furniture/furniture-user/furniture-user.component';
import { AuthGuard } from './authentication/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'furniture',
    canActivate: [AuthGuard], 
    children: [{
      path: 'all',
      component: FurnitureAllComponent
    }, 
    {
      path: 'create',
      component: CreateFurnitureComponent
    },
    {
      path: ':id',
      component: FurnitureDetailsComponent
    },
    {
      path: 'user/:id',
      component: FurnitureUserComponent
    }]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
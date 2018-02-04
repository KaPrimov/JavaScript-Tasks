import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';

import { RealHomeComponent } from './main/real-home/real-home.component';
import { AuthGuard } from './guards/auth.guard'
import { AttackGuard } from './guards/attack.guard';
import { TargetGuard } from './guards/target.guard';
import { AttackingGuard } from './guards/attacking.guard';
import { SuccessAttackComponent } from './success-attack/success-attack.component';
import { WrongAttackComponent } from './wrong-attack/wrong-attack.component';

const routes: Routes = [
  {path: '', canActivate: [AuthGuard],pathMatch: 'full', component: HomeComponent},
  {path: 'attack', canActivate: [AttackGuard], component: RealHomeComponent},
  {path: 'red', canActivate: [TargetGuard], component: SuccessAttackComponent},
  {path: 'green', canActivate: [TargetGuard], component: SuccessAttackComponent},
  {path: 'blue', canActivate: [TargetGuard], component: SuccessAttackComponent},
  {path: 'yellow', canActivate: [TargetGuard], component: SuccessAttackComponent},
  {path: 'attacking/:faction', canActivate: [AttackingGuard], component: SuccessAttackComponent},
  {path: 'wrong/:faction', component: WrongAttackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

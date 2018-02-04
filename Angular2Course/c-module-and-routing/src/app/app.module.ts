import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { GreenComponent } from './main/submodules/green/green.component';
import { YellowComponent } from './main/submodules/yellow/yellow.component';
import { BlueComponent } from './main/submodules/blue/blue.component';
import { RedComponent } from './main/submodules/red/red.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard'
import { RealHomeComponent } from './main/real-home/real-home.component';
import { AttackGuard } from './guards/attack.guard';
import { TargetGuard } from './guards/target.guard';
import { AttackingGuard } from './guards/attacking.guard';
import { SuccessAttackComponent } from './success-attack/success-attack.component';
import { WrongAttackComponent } from './wrong-attack/wrong-attack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreenComponent,
    YellowComponent,
    BlueComponent,
    RedComponent,
    RealHomeComponent,
    SuccessAttackComponent,
    WrongAttackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AttackGuard, TargetGuard, AttackingGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestpageComponent } from './contestpage/contestpage.component';
import { HomeComponent } from './home/home.component';
import { ContestComponent } from './contest/contest.component';
import { RoutingRoutingModule } from './routing-routing.module';
import { CustomMaterialModule} from '../custom-material.module';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ 
    ContestComponent,
    ContestpageComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    CustomMaterialModule,
    SharedModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoutingModule { }

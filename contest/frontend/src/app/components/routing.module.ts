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
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './services/rest.service';
import {ContestService} from './services/contest.service';

const services = [
  RestService,
  ContestService
];

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
    SharedModule,
    HttpClientModule
  ],
  providers: [...services],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContestComponent} from './contest/contest.component';
import {ContestpageComponent} from './contestpage/contestpage.component';
import {WelcomeComponent} from './welcome.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent,children:[
    {path:'contest/list',component:ContestComponent},
    {path:'contest/:id',component:ContestpageComponent},
    {path:'home',component:HomeComponent},
  ]},
  
  //{path:'home',loadChildren: ()=>import('./home/home-routing.module').then(m => m.RoutingRoutingModule)}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }

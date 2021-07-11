import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContestComponent} from './components/contest/contest.component';
import {LoginComponent} from './components/login/login.component';
import {ContestpageComponent} from './components/contestpage/contestpage.component';
import {HomeComponent} from "./components/home/home.component";
const routes: Routes = [
  {path:'page',loadChildren: ()=>import('./components/routing.module').then(m => m.RoutingModule)},
  {path:'',redirectTo:'/page',pathMatch:'full'}
  
];
// {path:'',redirectTo:'/login',pathMatch:'full'}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardLogin } from './guards/auth.guard.login';
import { AuthGuardTabla } from './guards/auth.guard.table';

const routes: Routes = [
  {
    path: 'login',
    canActivate:[AuthGuardLogin],
    loadChildren: './view/login/login.module#LoginModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'tabla',
      canActivate:[AuthGuardTabla],
    loadChildren: './view/table/table.module#TableModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'splogin', pathMatch: 'full'},
  {path: 'splogin', redirectTo: 'splogin', pathMatch: 'full'},
  {path: 'spregister', redirectTo: 'spregister', pathMatch: 'full'},
  {path: 'nav', loadChildren: 'app/modules/dashboard.module#DashBoardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

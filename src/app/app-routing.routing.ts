import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'home',
  loadChildren: () => import('./components/home-page/home-page.module').then( m => m.HomePageModule),
},
{
  path: '',
  loadChildren: () => import('./components/home-page/home-page.module').then( m => m.HomePageModule),
},
{
  path: 'login',
  loadChildren: () => import('./components/log-in/log-in.module').then( m => m.LogInModule),
},
{
  path: 'menu',
  loadChildren: () => import('./components/menu/menu.module').then( m => m.MenuModule),
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

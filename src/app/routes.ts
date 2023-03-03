import { Routes } from '@angular/router';
import { SmartlisHomeComponent } from './smartlis-home/smartlis-home.component';
import { Error404Component } from './mod-shared/errors/404.component';

export const appRoutes: Routes = [
  { path: 'home', component: SmartlisHomeComponent },
  {
    path: 'file',
    loadChildren: () => import('./mod-file/file.module').then(m => m.FileModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./mod-user/user.module').then(m => m.UserModule)
  },
  //   { path: 'user', loadChildren: './mod-user/user.module#UserModule' },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: '',redirectTo: 'user/login', pathMatch: 'full' },
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SuperAdminLoginComponent } from './super-admin-login/super-admin-login.component';
import { SuperAdminNavigationComponent } from './super-admin-navigation/super-admin-navigation.component';


const routes: Routes = [
 // {path:'',component:SuperAdminLoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'',component:SuperAdminNavigationComponent},

  { path: 'userdashboard', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './main/main/main.component';


const routes: Routes = [
  {path: 'registration', component: AuthenticationComponent },
  {path: 'login', component: LoginComponent},
  {path: 'main' , component: MainComponent},
  {path: 'main',
loadChildren: () => import('./main/main/main.module').then(m => m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';

const  routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'acceuil', component: AcceuilComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}

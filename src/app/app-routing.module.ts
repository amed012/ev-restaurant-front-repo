import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilUserComponent } from './acceuil-user/acceuil-user.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { CommentComponent } from './comment/comment.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';

const  routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'admin', component: AdminComponent ,canActivate: [AuthGuard]},
  { path: 'acceuil', component: AcceuilComponent ,canActivate: [AuthGuard]},
  { path: 'acceuil2', component: AcceuilUserComponent ,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'addRestauarnt', component: AddRestaurantComponent ,canActivate: [AuthGuard]},
  { path: 'addComment', component: CommentComponent ,canActivate: [AuthGuard]},


  { path: '', component: LoginComponent },
  

 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { EqiComponent } from "./eqi/eqi.component";
import { EqiAdminComponent } from "./eqi-admin/eqi-admin.component";
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from "./guards/admin.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'eqi', component: EqiComponent, canActivate: [AuthGuard] },
  { path: 'eqi/admin', component: EqiAdminComponent, canActivate: [AuthGuard, AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

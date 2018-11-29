import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EqiComponent } from './eqi/eqi.component';
import { AuthService } from "./services/auth.service";
import { LogoutComponent } from './logout/logout.component';
import { EqiAdminComponent } from './eqi-admin/eqi-admin.component';

export function tokenGetter() {
  return AuthService.getToken();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EqiComponent,
    LogoutComponent,
    EqiAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['127.0.0.1:8000'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

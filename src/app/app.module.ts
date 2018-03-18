import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRegisterComponent } from './account/account-register/account-register.component';
import { AccountTypeComponent } from './account/account-type/account-type.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountTypeComponent,
    AccountRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { AccountTypeComponent } from './account/account-type/account-type.component';
import { AccountRegisterComponent } from './account/account-register/account-register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'account-type', pathMatch: 'full' },
  { path: 'account-register/:accountType', component: AccountRegisterComponent },
  { path: 'account-type', component: AccountTypeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AccountComponent,
    AccountTypeComponent,
    AccountRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
